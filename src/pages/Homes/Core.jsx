import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreMoves = [
  {
    number: "01",
    title: "Creativity",
    description:
      "Our creative team crafts captivating, innovative solutions that ensure our clients stand out in competitive marketplaces.",
  },
  {
    number: "02",
    title: "Observation",
    description:
      "Our experts conduct comprehensive analysis to evaluate your performance and deliver optimal solutions tailored to your needs.",
  },
  {
    number: "03",
    title: "Research",
    description:
      "Our research team performs thorough competitive analysis, studying proven strategies and anticipating future industry developments.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our proficiency encompasses the smooth execution of tactics and ongoing content optimization grounded in real-time performance data.",
  },
];

const Core = () => {
  const redDotRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    if (!timelineContainerRef.current || !redDotRef.current || !progressLineRef.current) return;

    const container = timelineContainerRef.current;
    const dot = redDotRef.current;
    const progressLine = progressLineRef.current;

    // GPU hints
    dot.style.willChange = "transform";
    progressLine.style.willChange = "height";

    let maxHeight = 0;

    // Use quickSetters for better performance
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setLineHeight = gsap.quickSetter(progressLine, "height", "px");

    const updateMaxHeight = () => {
      maxHeight = container.scrollHeight - dot.clientHeight;
    };

    updateMaxHeight();

    const tween = gsap.to({ value: 0 }, {
      value: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",     // mobile friendly start
        end: "bottom 20%",    // mobile friendly end
        scrub: 0.4,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onRefresh: updateMaxHeight,
      },
      onUpdate: function () {
        const progress = this.targets()[0].value;
        const y = progress * maxHeight;
        setDotY(y);
        setLineHeight(y + dot.clientHeight / 2);
      },
    });

    // Refresh on resize/orientation changes
    const refreshHandler = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refreshHandler);
    window.addEventListener("orientationchange", refreshHandler);

    return () => {
      tween.kill();
      window.removeEventListener("resize", refreshHandler);
      window.removeEventListener("orientationchange", refreshHandler);
    };
  }, timelineContainerRef);

  return () => ctx.revert();
}, []);


  return (
    <section className="relative bg-white px-4 overflow-hidden font-sans font-halcom text-black mb-10">
      {/* Header */}
      <div
        className="max-w-4xl mx-auto mb-16 text-center px-4 relative z-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Unlocking Growth with our C.O.R.E
        </h2>
        <p className="text-gray-800 text-lg" data-aos="fade-up" data-aos-delay="100">
          Our CORE Moves
        </p>
      </div>

      {/* Timeline Container */}
      <div
        ref={timelineContainerRef}
        className="max-w-6xl mx-auto relative z-20 px-4 flex flex-col items-center space-y-16"
        style={{ paddingTop: 0, marginTop: 0 }} // ensure no top padding or margin here
      >
        {/* Gray vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-400 opacity-50" />

        {/* Red progress line */}
        <div
          ref={progressLineRef}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-red-600 origin-top"
          style={{ height: 0 }}
        />

        {/* Red dot */}
        <div
          ref={redDotRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-lg"
          style={{ top: 0 }}
        />

        {/* Timeline Items */}
        {coreMoves.map((move, index) => {
          const isEven = index % 2 === 0;
          const sideClass = isEven ? "timeline-item-left" : "timeline-item-right";

          return (
            <div
              key={index}
              className={`flex items-center w-full max-w-3xl mx-auto relative ${sideClass}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }} // add vertical spacing inside each item
            >
              {/* Connecting line for even items (left) */}
              {isEven && (
                <div className="connector-line-left absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-gray-300 opacity-50" />
              )}

              {/* Step Content */}
              <div
                className={`flex items-center space-x-4 md:space-x-6 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Dot with number */}
                <div
                  className="w-16 h-16 flex items-center justify-center bg-black text-white font-bold text-xl rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                  data-aos="zoom-in"
                  style={{
                    marginRight: isEven ? "30px" : "0",
                    marginLeft: isEven ? "0" : "30px",
                  }}
                >
                  {move.number}
                </div>

                {/* Content Box */}
                <div
                  className={`bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md w-full section-heading transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
                    !isEven ? "right-card" : ""
                  }`}
                  data-aos="slide-up"
                >
                  <h3 className="text-xl font-bold mb-2 section-text text-accent">
                    {move.title}
                  </h3>
                  <p>{move.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional CSS */}
      <style jsx>{`
        /* Animations */
        [data-aos="slide-up"] {
          animation: slideUp 1s forwards;
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [data-aos="zoom-in"] {
          opacity: 0;
          transform: scale(0.8);
          animation: zoomIn 1s forwards;
        }
        @keyframes zoomIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Left side items */
        .timeline-item-left {
          justify-content: flex-start;
        }

        /* Right side items */
        .timeline-item-right {
          justify-content: flex-end;
        }

        /* Right card alignment */
        .timeline-item-right .right-card {
          margin-left: 0;
          margin-right: -10px;
        }

        /* Fix connector line positions */
        .timeline-item-right .connector-line-right {
          right: calc(50% - 1rem);
        }
        .timeline-item-left .connector-line-left {
          left: calc(50% - 1rem);
        }
          gsap.set(progressLine, {
  height: progress * maxHeight,
});
      `}</style>
    </section>
  );
};

export default Core;
