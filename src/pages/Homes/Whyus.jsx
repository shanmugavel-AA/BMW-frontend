import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Whyus() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

 useEffect(() => {
  const ctx = gsap.context(() => {
    if (!sectionRef.current) return;

    // ✅ Background animation (GPU-accelerated transform only)
    gsap.to(bgRef.current, {
      yPercent: 30,
      skewY: 2,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        fastScrollEnd: true, // ✅ avoids jitter on fast scrolls
        invalidateOnRefresh: true,
      },
    });

    // ✅ Title animation (runs once)
    gsap.from(titleRef.current, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none", // ✅ ensures no replay/reset
    }});

    

    // ✅ Refresh ScrollTrigger for accurate positions
    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);



  const features = [
    {
      title: "Creativity",
      description1: "Ideas that inspire innovation.",
      description2: "Unique designs that stand out.",
      description3: "Making your brand unforgettable.",
      icon: "fas fa-paint-brush",
    },
    {
      title: "Consistency",
      description1: "Reliable delivery every time.",
      description2: "High standards maintained.",
      description3: "We never miss a deadline.",
      icon: "fas fa-sync-alt",
    },
    {
      title: "Connection",
      description1: "We understand your audience.",
      description2: "Build trust with storytelling.",
      description3: "Relationships over transactions.",
      icon: "fas fa-handshake",
    },
    {
      title: "Innovation",
      description1: "Always ahead of the curve.",
      description2: "Adapting to new trends fast.",
      description3: "Creative tech solutions.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Strategy",
      description1: "Plans backed by research.",
      description2: "Clear roadmaps to success.",
      description3: "Data-driven decisions.",
      icon: "fas fa-bullseye",
    },
    {
      title: "Engagement",
      description1: "Content that captivates.",
      description2: "Boosting audience loyalty.",
      description3: "Turning followers into fans.",
      icon: "fas fa-comments",
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10 px-6">
      {/* Slanted moving background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(120deg, #000 50%, #fff 50%)",
          transform: "skewY(-4deg)",
          transformOrigin: "top left",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="text-white">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-red-600"> WHY US?</span>
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            We merge creativity, technology, and strategy to bring your brand to life.
            From innovative campaigns to lasting engagement, our work is designed
            to leave a mark.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white border-2 border-black border-t-[6px] border-t-red-600 rounded-lg p-4 text-center text-black transition-transform duration-300 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)]"
            >
              <div className="text-red-600 text-2xl mb-2">
                <i className={item.icon}></i>
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm opacity-80 mt-1">{item.description1}</p>
              <p className="text-sm opacity-80 mt-1">{item.description2}</p>
              <p className="text-sm opacity-80 mt-1">{item.description3}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
