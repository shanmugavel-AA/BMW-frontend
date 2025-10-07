import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import caseStudies from "../../data/caseStudiesData";

export default function CaseStudySection() {
  const [cards] = useState(caseStudies);
  const [activeIndex, setActiveIndex] = useState(0);
  const leftRef = useRef(null);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    // Start auto-advance interval
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    // Clear on unmount
    return () => clearInterval(intervalRef.current);
  }, [cards.length]);

  const nextCard = () => {
    // On manual next, reset interval to avoid double fast advance
    clearInterval(intervalRef.current);
    setActiveIndex((prev) => (prev + 1) % cards.length);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
  };

  const viewMore = () => {
    navigate(`/case-studies/${activeCard.id}`);
  };

  const activeCard = cards[activeIndex];

  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 bg-white text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12 text-center text-gray-800">
        Case Studies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-6xl mx-auto bg-white items-stretch">
        {/* LEFT CONTENT */}
        <div ref={leftRef} className="flex flex-col p-2 sm:p-4 md:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 leading-tight">
            {activeCard.title}
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-gray-700">
            {activeCard.description}
          </p>

          <ul className="list-none text-gray-600 flex-1">
            {activeCard.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start mb-3 sm:mb-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-primary text-white mr-3 sm:mr-4 text-lg">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* View More Button */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={viewMore}
              className="px-5 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition bg-secondary hover:bg-accent text-white"
            >
              View More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE WRAPPER */}
        <div className="flex flex-col items-center mt-14">
          {/* Right card: image only */}
          <div
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            style={{ height: 400 }}
          >
            <img
              src={activeCard.img}
              alt={activeCard.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Next button below the card, centered */}
          <button
            onClick={nextCard}
            ref={(el) => {
              if (el) {
                gsap.killTweensOf(el);
                gsap.to(el, {
                  y: -8,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  duration: 1.2,
                });
              }
            }}
            className="mt-8 px-5 py-2 rounded-lg font-bold bg-secondary hover:bg-accent text-white transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
