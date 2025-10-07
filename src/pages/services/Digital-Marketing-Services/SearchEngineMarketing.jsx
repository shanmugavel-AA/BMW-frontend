import React ,{useRef, useState, useEffect, useMemo} from "react";
import SEO from "../../../ReuseComponents/SEO";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SearchEngineMarketing = () => {
  const trustedClients = [
    "REDEFINED /",
    "BRANDING /",
    "LOGO DESIGN /",
    "DIGITAL STRATEGY /",
    "CREATIVE SOLUTIONS /",
  ];

    const logos = [
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Phoenix.png",
    alt: "Google",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Mercedes.png",
    alt: "Meta",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Casagrand.png",
    alt: "Amazon",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/PVR.png",
    alt: "Microsoft",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Palmshore.png",
    alt: "Apple",
  },
];

 const faqs = [
  {
    q: "What is SEO and why is it important?",
    a: "SEO (Search Engine Optimization) helps improve your website's visibility on search engines, attracting more organic traffic.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "It usually takes 3-6 months to see significant improvements, depending on competition and website quality.",
  },
  {
    q: "Do I need to keep doing SEO once I rank?",
    a: "Yes, SEO is an ongoing process as competitors and algorithms change.",
  },
  {
    q: "What's the difference between on-page and off-page SEO?",
    a: "On-page SEO is optimizing your website's content, while off-page SEO is about building authority through backlinks.",
  },
  {
    q: "Can SEO guarantee #1 ranking?",
    a: "No ethical SEO can guarantee #1, but it can significantly improve your chances of ranking higher.",
  },
];

const countersData = useMemo(() => [
  { id: 1, label: "Projects Completed", target: 1200 },
  { id: 2, label: "Happy Clients", target: 875 },
  { id: 3, label: "Awards Won", target: 15 },
  { id: 4, label: "Years of Experience", target: 10 },
], []); // empty dependency array to memoize once on mount


  const sectionRef = useRef(null);
    const countersRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    
useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          countersRefs.current.forEach((el, idx) => {
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: countersData[idx].target,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 }, // ensures whole numbers only
              }
            );
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [countersData]);

   useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (activeIndex === i) {
        gsap.to(el, { height: "auto", duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(el, { height: 0, duration: 0.3, ease: "power2.in" });
      }
    });
  }, [activeIndex]);


  return (
    <div className="font-sans text-gray-900">
      <>
        <SEO
          title="Search Engin Marketing Services | SRK Portfolio"
          description="Learn about Shanmugavel A, Frontend Developer and React expert."
          image="https://www.yourdomain.com/images/static-about.jpg" // static image
          canonicalUrl="https://www.brandandmediaworks.com/about"
        />
      </>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.65)), url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg')",
        }}
        aria-label="Hero Section"
      >
        <div className="max-w-3xl px-6 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
            SEO & Content Strategy
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Manage, optimize, and scale your social media presence across
            platforms like Instagram, LinkedIn, Facebook, and X. Our strategies
            focus on engagement, brand awareness, and community building to
            enhance your digital footprint.
          </p>
          <a className="bg-secondary px-6 py-3 rounded-full font-semibold shadow-md hover:bg-accent transition">
            Learn More
          </a>
        </div>
      </section>

      <section className="relative bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-3xl md:text-5xl font-mediumbold capitalize tracking-widest space-y-4 md:space-y-10">
            <h2>
              ELEVATE YOUR <span className="text-accent">BRAND</span>
            </h2>

            {/* Image + Text Row */}
            <div className="flex items-center gap-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/022/319/629/small_2x/digital-marketing-online-marketing-and-internet-marketing-concept-photo.jpg"
                alt="Digital Marketing"
                className="h-14 md:h-20 transform rotate-6 shadow-md rounded-md"
              />
              <h2>
                <span className="text-accent">EXPERIENCE</span> USER FRIENDLY
              </h2>
            </div>

            <h2>
              <span className="text-accent">DESIGNER</span> NEW HEIGHT
            </h2>
          </div>

          {/* SAY HI Block */}
          <div className="mt-8 md:mt-0 md:absolute md:-bottom-10 md:right-24 max-w-md">
            <h2 className="text-accent text-4xl">SAY HI!</h2>
            <p className="text-lg font-medium leading-relaxed text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sint officiis hic error, voluptas tenetur voluptates animi
              adipisci quaerat dignissimos!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <section className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-7 gap-6 p-6 -mt-2 md:-mt-0">
          {/* Left Column - Large Image */}
          <div className="col-span-3">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.5MAx0NNixd0mumBn2pDR9wHaFj?cb=12&w=1000&h=750&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Large Showcase"
              className="w-full h-[40vh] md:h-[70vh] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Center Column */}
          <div className="col-span-2 flex flex-col gap-4">
            <img
              src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX14991805.jpg"
              alt="Center Top"
              className="w-full h-[30vh] md:h-[40vh] object-cover rounded-lg shadow-md"
            />
            <div className="p-6 flex items-center justify-center">
              <p className="text-lg font-medium text-gray-700 text-center">
                Center Column Content – add description or features here.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 flex flex-col gap-4">
            <img
              src="https://picsum.photos/400/250?2"
              alt="Right Top"
              className="w-full h-[30vh] md:h-[40vh] object-cover rounded-lg shadow-md"
            />
            <div className="p-6 flex items-center justify-center">
              <p className="text-lg font-medium text-gray-700 text-center">
                Right Column Content – more details or text here.
              </p>
            </div>
          </div>
        </section>
      </section>
        <section className="bg-primary">
      <div className="overflow-hidden whitespace-nowrap py-4 w-full px-0 mx-0">
        <div
          className="inline-block animate-scroll whitespace-nowrap pause-on-hover"
          style={{ willChange: "transform" }}
        >
          {[...trustedClients, ...trustedClients].map((text, index) => (
            <span
              key={index}
              className="text-[4rem] md:text-[6rem] tracking-wide"
              style={{
                color: "transparent",
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "black",
                textStrokeWidth: "1.5px",
                textStrokeColor: "black",
                userSelect: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {text}
            </span>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 20s linear infinite;
            animation-play-state: running;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
            cursor: pointer;
          }
        `}</style>
      </div>
      </section>

      <section className="min-h-screen p-6">
  <div className="ml-4 sm:ml-20">
    <h2 className="text-4xl sm:text-5xl font-extrabold">
      <span className="text-accent">Search Engine Marketing</span> Process
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-26 grid grid-cols-1 sm:grid-cols-3 gap-8">
    <div className="text-left w-full sm:w-[60vh]">
      <h2 className="text-3xl font-bold text-accent">PROCESS ONE</h2>
      <p className="text-lg text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
      <img
        src="https://th.bing.com/th/id/R.9cdf8164fe983d89e396974c9236fc1d?rik=R93zmt1aU3%2fV7g&riu=http%3a%2f%2fdragon-db.com%2fwp-content%2fuploads%2f2015%2f12%2fSearch-Engine-Optimization-SEO.jpg&ehk=1PrJORGQz97u%2btWxwTzGjQXXAkm8SABAhX96wlcG2jU%3d&risl=&pid=ImgRaw&r=0"
        alt="seo"
        className="mt-2"
      />
    </div>

    <div className="text-left w-full sm:w-[60vh] sm:-mt-20">
      <img
        src="https://img.freepik.com/premium-vector/seo-optimization-digital-marketing-strategy-1_999616-463.jpg"
        alt="seo"
        className="mt-2"
      />
      <h2 className="text-3xl font-bold text-accent">PROCESS TWO</h2>
      <p className="text-lg text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
    </div>

    <div className="text-left w-full sm:w-[60vh] sm:mt-20">
      <h2 className="text-3xl font-bold text-accent">PROCESS THREE</h2>
      <p className="text-lg text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.uL1Mcnrhp5MsaCLsjWYIaAHaHa?cb=12&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="seo"
        className="mt-2"
      />
    </div>

    <div className="text-left w-full sm:w-[60vh] sm:-mt-40">
      <h2 className="text-3xl font-bold text-accent">PROCESS FOUR</h2>
      <p className="text-lg text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.uKP4drBG_uQr8kDPxVBFWAHaFB?cb=12&w=1024&h=694&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="seo"
        className="mt-2"
      />
    </div>

    <div className="text-left w-full sm:w-[60vh] sm:-mt-20">
      <img
        src="https://files.idyllic.app/files/static/3775581"
        alt=""
      />
      <h2 className="text-3xl font-bold text-accent">PROCESS FIVE</h2>
      <p className="text-lg text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
    </div>

    <div className="text-left w-full sm:w-[60vh] sm:mt-20">
      <h2 className="text-3xl font-bold text-accent ml-0 sm:ml-10">PROCESS SIX</h2>
      <p className="text-lg text-gray-700 mt-2 ml-0 sm:ml-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        temporibus et dicta, enim ducimus soluta itaque aut. Praesentium,
        aspernatur incidunt?
      </p>
      <img
        src="https://wallpaperaccess.com/full/8597355.jpg"
        alt="seo"
        className="mt-2"
      />
    </div>
  </div>
</section>

      <section>
        <ClientCarousel logos={logos} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="sm:pr-8">
            {" "}
            {/* remove extra justification */}
            <h2 className="text-3xl sm:text-5xl text-accent font-extrabold mb-6">
              Why Us
            </h2>
            <p className="text-gray-700 mb-4 text-lg font-medium">
              We provide innovative solutions tailored to your business needs,
              helping you grow faster and smarter. Our approach blends
              creativity, technology, and strategy to deliver measurable
              results. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sed rerum praesentium, dolor corporis et obcaecati perferendis
              totam non voluptatem laborum!
            </p>
            <p className="text-gray-700 text-lg font-medium">
              With our expert team, we ensure your projects are executed
              seamlessly, on time, and with maximum impact.
            </p>
            <div className="p-6 mt-4 w-[50vh] md:w-[100vh] bg-white shadow-md relative -mr-42 z-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to <span className="text-accent">Grow</span> Your
                Business?
              </h3>
              <p className="text-gray-700 mb-4 text-lg font-medium">
                We provide innovative solutions tailored to your business needs,
                helping you grow faster and smarter. Our expert team ensures
                projects are delivered seamlessly with maximum impact.
              </p>
              <button className="px-6 py-3 bg-accent text-white font-semibold rounded-3xl shadow hover:bg-accent/90 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full flex justify-center">
            {/* Large Image */}
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.vMx5D4U-_k-90yg-ukCWfgHaKC?r=0&w=720&h=976&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Large"
              className="w-full sm:w-[500px] h-[400px] sm:h-[600px] object-cover border-4 border-white"
            />

            {/* Small Overlay Image - hidden on mobile */}
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.gVfyc4hu2tXS7zYomYsLCAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Small"
              className="hidden sm:block absolute top-20 left-40 sm:left-80 w-28 h-20 sm:w-[350px] sm:h-[450px] object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 px-6 bg-white mb-10">
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
                <p
                  ref={(el) => (countersRefs.current[idx] = el)}
                  className="text-4xl sm:text-5xl font-extrabold text-black"
                >
                  0
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

      <CaseStudies />

      {/* FAQ Section */}
      <section className="relative flex flex-col items-center justify-center text-center mt-4 mb-20 px-4 sm:px-6">
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <div className="border-accent border-2"></div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-gray-300 font-extrabold">
            QUESTIONS
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl text-secondary relative -mt-8 sm:-mt-12 md:-mt-16">
            FAQ's on SEO Service
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 sm:p-6 mt-10 sm:mt-16 bg-white rounded-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            FAQs
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-3 sm:py-4 cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              {/* Question */}
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base sm:text-lg font-semibold">{faq.q}</h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === i ? "rotate-45 text-accent" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Answer */}
              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="overflow-hidden h-0"
              >
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchEngineMarketing;
