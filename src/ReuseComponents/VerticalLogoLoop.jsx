import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

// Animation config constants
const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

// Convert value to CSS length string
const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);
  return isMobile;
};

// ResizeObserver for responsive updates (measures height)
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

// Wait for all images to load before measuring height
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

// Animation loop for vertical movement
const useAnimationLoopVertical = (trackRef, targetVelocity, seqHeight, isHovered, pauseOnHover, isMobile) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (seqHeight > 0) {
      offsetRef.current = ((offsetRef.current % seqHeight) + seqHeight) % seqHeight;
      track.style.transform = `translate3d(0,${-offsetRef.current}px,0)`;
    }
    let lastMobileFrame = 0;
    const MOBILE_FRAME_INTERVAL = 1000 / 60; // ~40fps
    const animate = timestamp => {
      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;
      // Frame throttling for mobile
      if (isMobile) {
        if ((timestamp - lastMobileFrame) < MOBILE_FRAME_INTERVAL) {
          rafRef.current = requestAnimationFrame(animate);
          return;
        }
        lastMobileFrame = timestamp;
      }
      if (seqHeight > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqHeight) + seqHeight) % seqHeight;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(0,${-offsetRef.current}px,0)`;
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
  }, [targetVelocity, seqHeight, isHovered, pauseOnHover, trackRef, isMobile]);
};

export const VerticalLogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'down', // 'down' or 'up'
  height = '100%',
  logoWidth = 120,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor = '#fff',
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
  style,
}) => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'down' ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return isMobile
      ? magnitude * 0.55 * directionMultiplier * speedMultiplier
      : magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction, isMobile]);

  const updateDimensions = useCallback(() => {
    const containerHeight = containerRef.current?.clientHeight ?? 0;
    const sequenceHeight = seqRef.current?.getBoundingClientRect?.()?.height ?? 0;
    if (sequenceHeight > 0) {
      setSeqHeight(Math.ceil(sequenceHeight));
      let copiesNeeded = Math.ceil(containerHeight / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
      if (isMobile) copiesNeeded = Math.min(4, copiesNeeded);
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, [isMobile]);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoWidth, isMobile]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoWidth, isMobile]);
  useAnimationLoopVertical(trackRef, targetVelocity, seqHeight, isHovered, pauseOnHover, isMobile);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile && pauseOnHover) setIsHovered(true);
  }, [pauseOnHover, isMobile]);
  const handleMouseLeave = useCallback(() => {
    if (!isMobile && pauseOnHover) setIsHovered(false);
  }, [pauseOnHover, isMobile]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, copyIndex) => (
      <ul
        className="flex flex-col items-center"
        key={`copy-${copyIndex}`}
        role="list"
        aria-hidden={copyIndex > 0}
        ref={copyIndex === 0 ? seqRef : undefined}
      >
        {logos.map((item, itemIndex) => (
          <li
            className="flex-shrink-0 leading-none"
            role="listitem"
            key={`${copyIndex}-${itemIndex}`}
            style={{
              marginBottom: `${gap}px`,
              fontSize: `${logoWidth}px`,
              overflow: !isMobile && scaleOnHover ? 'visible' : undefined,
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
                  decoding={!isMobile ? 'async' : undefined}
                  draggable={false}
                  style={{ width: `${logoWidth}px`, height: item.height ?? 'auto' }}
                  className={`block object-contain pointer-events-none transition-transform duration-300 ${!isMobile && scaleOnHover ? 'group-hover:scale-120' : ''}`}
                />
              </a>
            ) : (
              <img
                src={item.src}
                alt={item.alt ?? ''}
                title={item.title}
                loading="lazy"
                decoding={!isMobile ? 'async' : undefined}
                draggable={false}
                style={{ width: `${logoWidth}px`, height: item.height ?? 'auto' }}
                className={`block object-contain pointer-events-none transition-transform duration-300 ${!isMobile && scaleOnHover ? 'group-hover:scale-120' : ''}`}
              />
            )}
          </li>
        ))}
      </ul>
    )),
    [copyCount, logos, gap, logoWidth, scaleOnHover, isMobile]
  );

  return (
    <div
      ref={containerRef}
      className={`
        relative overflow-y-hidden
        ${fadeOut ? '' : ''}
        ${!isMobile && scaleOnHover ? 'pt-[2.8px] pb-[2.8px]' : ''}
        ${className || ''}
      `}
      style={{
        height: toCssLength(height) ?? '100%',
        userSelect: isMobile ? 'none' : undefined,
        ...style,
      }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 right-0 pointer-events-none z-10"
            style={{
              height: 'clamp(24px,8%,120px)',
              background: `linear-gradient(to bottom, ${fadeOutColor} 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
          <div
            className="absolute left-0 bottom-0 right-0 pointer-events-none z-10"
            style={{
              height: 'clamp(24px,8%,120px)',
              background: `linear-gradient(to top, ${fadeOutColor} 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
        </>
      )}
      <div
        className="flex flex-col w-max will-change-transform select-none"
        ref={trackRef}
      >
        {logoLists}
      </div>
    </div>
  );
});

VerticalLogoLoop.displayName = 'VerticalLogoLoop';
export default VerticalLogoLoop;
