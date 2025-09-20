import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new window.ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };
    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad, { once: true });
        img.addEventListener('error', handleImageLoad, { once: true });
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    }
    const animate = timestamp => {
      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;
      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

export const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor = '#fff',
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
  style,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction]);

  // Tailwind doesn't handle CSS variables for gap/font-size directly, so use inline style
  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleMouseEnter = useCallback(() => { if (pauseOnHover) setIsHovered(true); }, [pauseOnHover]);
  const handleMouseLeave = useCallback(() => { if (pauseOnHover) setIsHovered(false); }, [pauseOnHover]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, copyIndex) => (
      <ul
        className="flex items-center"
        key={`copy-${copyIndex}`}
        role="list"
        aria-hidden={copyIndex > 0}
        ref={copyIndex === 0 ? seqRef : undefined}
      >
        {logos.map((item, itemIndex) => (
          <li
            className={`flex-shrink-0 leading-none`}
            role="listitem"
            key={`${copyIndex}-${itemIndex}`}
            style={{
              marginRight: `${gap}px`,
              fontSize: `${logoHeight}px`,
              overflow: scaleOnHover ? 'visible' : undefined,
            }}
          >
            {item.href ? (
              <a
                className="inline-flex items-center rounded transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2"
                href={item.href}
                aria-label={item.alt ?? item.title ?? 'logo link'}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={item.src}
                  alt={item.alt ?? ''}
                  title={item.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  style={{ height: `${logoHeight}px`, width: item.width ?? 'auto' }}
                  className={`block object-contain pointer-events-none transition-transform duration-300 ${scaleOnHover ? 'group-hover:scale-120' : ''}`}
                />
              </a>
            ) : (
              <img
                src={item.src}
                alt={item.alt ?? ''}
                title={item.title}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{ height: `${logoHeight}px`, width: item.width ?? 'auto' }}
                className={`block object-contain pointer-events-none transition-transform duration-300 ${scaleOnHover ? 'group-hover:scale-120' : ''}`}
              />
            )}
          </li>
        ))}
      </ul>
    )),
    [copyCount, logos, gap, logoHeight, scaleOnHover]
  );

  return (
    <div
      ref={containerRef}
      className={`
        relative overflow-x-hidden
        ${fadeOut ? '' : ''}
        ${scaleOnHover ? 'pt-[2.8px] pb-[2.8px]' : ''}
        ${className || ''}
      `}
      style={{
        width: toCssLength(width) ?? '100%',
        ...style,
      }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fade effect overlays */}
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none z-10"
            style={{
              width: 'clamp(24px,8%,120px)',
              background: `linear-gradient(to right, ${fadeOutColor} 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none z-10"
            style={{
              width: 'clamp(24px,8%,120px)',
              background: `linear-gradient(to left, ${fadeOutColor} 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
        </>
      )}
      <div
        className="flex w-max will-change-transform select-none"
        ref={trackRef}
        // Tailwind doesn't handle prefers-reduced-motion natively, so add a custom class if you want
      >
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
