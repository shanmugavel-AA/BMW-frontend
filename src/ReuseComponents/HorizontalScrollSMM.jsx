import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const horizontalContent = [
  { title: "Increase Brand Recognition", desc: "Expand your reach...", img: "https://img.icons8.com/fluency/96/000000/bullhorn.png" },
  { title: "Drive Build Connections", desc: "Create authentic interactions...", img: "https://img.icons8.com/fluency/96/000000/group.png" },
  { title: "Boost Conversions", desc: "Implement strategic conversion pathways...", img: "https://img.icons8.com/fluency/96/000000/approval.png" },
  { title: "Amplify Revenue", desc: "Deploy precision-targeted campaigns...", img: "https://img.icons8.com/fluency/96/000000/graph-report.png" },
  { title: "Establishing Authenticity", desc: "Demonstrate your industry expertise...", img: "https://img.icons8.com/fluency/96/000000/security-checked.png" },
];

const HorizontalScrollSMM = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const blockRefs = useRef([]);
  const [blockWidth, setBlockWidth] = useState(480);

  useLayoutEffect(() => {
    const updateWidth = () => setBlockWidth(window.innerWidth >= 768 ? 480 : 320);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        // Set block widths
        gsap.set(blockRefs.current, { width: blockWidth });

        // Calculate total scroll distance to end when last block fully visible
        const totalScroll = containerRef.current.scrollWidth - window.innerWidth;

        // Animate horizontal scroll
        gsap.to(containerRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.5,
            end: () => `+=${totalScroll}`,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        // Fade-in blocks individually
// Replace the current fade-in loop with this
blockRefs.current.forEach((block) => {
  gsap.fromTo(
    block,
    { opacity: 60, x: -100 }, // start off to the left
    {
      opacity: 1,
      x: 0, // slide to original position
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: "center center",
        end: "center center",
        scrub: 0.5,
      },
    }
  );
});
      } else {
        // Mobile: simple horizontal scroll
        gsap.set(containerRef.current, { x: 0 });
        gsap.set(blockRefs.current, { width: blockWidth, opacity: 1, y: 0 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [blockWidth]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-12">
      <div className="mb-12 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14213d] mb-3 leading-tight tracking-wider">
          Why Your Business Needs Social Media Marketing
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Harnessing social media is not an option—it's a necessity to thrive in the digital age. Here’s how our strategies benefit your brand:
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex space-x-8 px-6 md:overflow-x-visible overflow-x-auto scrollbar-hide"
        style={{ minHeight: "340px",transform: "translateZ(0)" }}
      >
        {horizontalContent.map((item, idx) => (
          <div
  key={item.title}
  ref={(el) => (blockRefs.current[idx] = el)}
  className="flex-shrink-0 bg-[#F9F9FA] rounded-2xl border border-gray-200 flex flex-col items-center justify-center px-7 py-8 cursor-default select-none"
  style={{
    width: blockWidth,
    height: 320,
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
  }}
>
  <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />
  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
  <p className="text-gray-600 text-base text-center">{item.desc}</p>
</div>

        ))}
      </div>

      <div className="block md:hidden text-center text-sm text-gray-400 mt-6 select-none">
        <span>Swipe side to view more →</span>
      </div>
    </section>
  );
};

export default HorizontalScrollSMM;
