import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "../ReuseComponents/CaseStudies"

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const heroRef = useRef(null);
  const detailsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content only once
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
      }

      // Animate Details section on scroll
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
    <div className="font-sans bg-[#222]">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.65)), url('https://media.istockphoto.com/photos/service-picture-id504303998?k=6&m=504303998&s=170667a&w=0&h=QrVWREiG1_yau-QrMzDRT27X1vPiuASs5NaEZIvQVOI=')",
        }}
        aria-label="Hero Section"
      >
        <div
          className="max-w-3xl px-6 text-white text-center"
          ref={heroRef}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Professional Service Detailing
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We provide tailored solutions designed to meet your business needs.
            From strategy to execution, our team ensures excellence at every
            step.
          </p>
          <a
            href="#details"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Details Section */}
      <section
        id="details"
        className="relative z-10 flex flex-col items-center justify-start px-6 pt-16 rounded-t-[60px] bg-white"
        aria-label="Service Details"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center tracking-wider">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl leading-relaxed">
          Discover in-depth details about our professional services, designed to
          help your business grow and succeed.
        </p>
      </section>

      {/* Section 1: Left Image, Right Content */}
<section className="w-full bg-white py-16 px-16 relative">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    {/* Left: Gray background shape */}
    <div className="absolute top-0 left-0 w-150 h-96 bg-gray-300 -translate-x-3 -translate-y-6 z-0"></div>

    {/* Left: Image */}
    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://th.bing.com/th/id/R.4fbd2ef6c05440449d7b5fa05f43cdf1?rik=3zw1lAw0vgEMkQ&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2021%2f10%2fSEO-Optimization-Illustration.jpg&ehk=wK5vkF6WKRYvAIpWVVnt8bo%2bPnu6NZIhamks1cB%2f5y4%3d&risl=&pid=ImgRaw&r=0"
        alt="Illustration"
        className="w-full h-auto relative z-10"
      />
    </div>

    {/* Right: Content */}
    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Your Heading Here</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique, quae eveniet nam eos consequuntur aut cupiditate incidunt, non quam impedit, magni laudantium error?
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* Section 2: Left Content, Right Image */}
<section className="w-full bg-white py-16 px-16 relative">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    {/* Left: Content */}
    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Hello Section</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique, quae eveniet nam eos consequuntur aut cupiditate incidunt, non quam impedit, magni laudantium error?
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>

    {/* Right: Gray background behind image */}
    <div className="absolute top-0 right-0 w-150 h-160 bg-gray-300 translate-x-3 -translate-y-6 z-0"></div>

    {/* Right: Image */}
    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://cdn.mypanel.link/09960a/98b6f81u0qlfalne.jpg"
        alt="Illustration"
        className="w-150 h-100 relative z-10"
      />
    </div>
  </div>
</section>

{/* Section 3: Left Image, Right Content */}
<section className="w-full bg-white py-16 px-16 relative">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    <div className="absolute top-0 left-0 w-150 h-96 bg-gray-300 -translate-x-3 -translate-y-6 z-0"></div>

    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://via.placeholder.com/500x400"
        alt="Illustration"
        className="w-full h-auto relative z-10"
      />
    </div>

    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Another Heading</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique.
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* Section 4: Left Content, Right Image */}
<section className="w-full bg-white py-16 px-16 relative">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Content Left</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique.
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>

    <div className="absolute top-0 right-0 w-150 h-160 bg-gray-300 translate-x-3 -translate-y-6 z-0"></div>

    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://via.placeholder.com/500x400"
        alt="Illustration"
        className="w-150 h-100 relative z-10"
      />
    </div>
  </div>
</section>

{/* Section 5: Left Image, Right Content */}
<section className="w-full bg-white py-16 px-16 relative">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    <div className="absolute top-0 left-0 w-150 h-96 bg-gray-300 -translate-x-3 -translate-y-6 z-0"></div>

    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://via.placeholder.com/500x400"
        alt="Illustration"
        className="w-full h-auto relative z-10"
      />
    </div>

    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Image Left Again</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique.
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>
  </div>
</section>

{/* Section 6: Left Content, Right Image */}
<section className="w-full bg-white py-16 px-16 relative mb-10">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-12 relative">
    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-6 z-10">
      <h2 className="text-3xl font-bold mb-4 tracking-wider">Content Right End</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero pariatur unde perferendis accusantium hic similique.
      </p>
      <button className="border-2 w-40 h-12 text-black text-sm hover:bg-accent transition hover:text-white">
        Learn More
      </button>
    </div>

    <div className="absolute top-0 right-0 w-150 h-60 bg-gray-300 translate-x-3 -translate-y-6 z-0"></div>

    <div className="md:w-1/2 px-4 md:px-6 relative z-10">
      <img
        src="https://via.placeholder.com/500x400"
        alt="Illustration"
        className="w-150 h-100 relative z-10"
      />
    </div>
  </div>
</section>

<CaseStudies/>

    </div>
  );
}
