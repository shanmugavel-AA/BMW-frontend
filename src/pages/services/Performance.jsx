import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const countersData = [
  { id: 1, label: "Projects Completed", target: 1200 },
  { id: 2, label: "Happy Clients", target: 800 },
  { id: 3, label: "Awards Won", target: 15 },
  { id: 4, label: "Cups of Coffee", target: 3000 },
];

// Custom hook for counter animation
function useCounterAnimation(triggerRef, counters) {
  const [counts, setCounts] = useState(counters.map(() => 0));
  useLayoutEffect(() => {
    if (!triggerRef.current) return;
    let frame;
    let started = false;
    const duration = 2000; // ms

    const animate = (startTime) => {
      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCounts(
        counters.map((c) => Math.floor(progress * c.target))
      );
      if (progress < 1) {
        frame = requestAnimationFrame(() => animate(startTime));
      }
    };

    // Setup GSAP/ScrollTrigger for triggering counter animation
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (!started) {
            started = true;
            const startTime = performance.now();
            frame = requestAnimationFrame(() => animate(startTime));
          }
        },
      });
    }, triggerRef);

    // Cleanup animation and triggers
    return () => {
      if (frame) cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, [triggerRef, counters]);

  return counts;
}

const Performance = () => {
  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  const sectionRef = useRef(null);
  const counts = useCounterAnimation(sectionRef, countersData);

  // Hero and details animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
      }
      if (detailsRef.current) {
        gsap.from(detailsRef.current, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.65)), url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg')",
        }}
        aria-label="Hero Section"
      >
        <div className="max-w-3xl px-6 text-white text-center" ref={heroRef}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
            Web Design
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            esse quaerat at porro repellat asperiores officia repellendus vel,
            numquam ratione ad molestias delectus voluptas illum alias autem.
            Libero, tempore voluptatem.
          </p>
          <a className="bg-secondary px-6 py-3 rounded-full font-semibold shadow-md hover:bg-accent transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Animated Detail and Counters Sections */}
      <section className="relative h-[100vh] flex items-center justify-start px-4 sm:px-8 lg:px-16 py-12">
        {/* Left Side Content */}
        <div
          className="relative z-10 w-1/2 flex flex-col justify-center bg-primary shadow-lg p-8"
          ref={detailsRef}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-accent tracking-wide">
            Your Trusted Web Design Company in Chennai
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            impedit in maiores itaque, cum suscipit et assumenda praesentium
            quia facere perspiciatis, eum dolorem totam quos numquam ullam eius
            ut. Aut autem atque modi! Minus, nihil?
          </p>
        </div>

        {/* Right Side Image */}
        <div className="absolute right-30 top-20 h-full w-[60%] overflow-hidden">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125327355/original/5616b84292a424fafd40ee9dd12071f9e4832994/design-and-develop-a-stunning-wordpress-website.jpg"
            alt="Your Company website design portfolio"
            className="h-[80vh] w-full object-cover"
          />
        </div>
      </section>

      <section ref={sectionRef} className="py-16 px-6 bg-white mb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Column: 2x2 Counter Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2">
            {countersData.map((counter, idx) => (
              <div
                key={counter.id}
                className={`flex flex-col justify-center items-center text-center p-4 
              ${idx % 2 === 0 ? "border-r border-gray-300" : ""} 
              ${idx < 2 ? "border-b border-gray-300" : ""}`}
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-black">
                  {counts[idx].toLocaleString()}
                </p>
                <p className="mt-2 text-base sm:text-lg font-medium text-gray-700">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 relative top-6">
            <h3 className="text-4xl text-accent font-bold mb-4 text-center">
              Right Column Title
            </h3>
            <p className="text-center text-black text-base sm:text-lg">
              This is some content on the right column. It is centered
              vertically but left-aligned in text.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
