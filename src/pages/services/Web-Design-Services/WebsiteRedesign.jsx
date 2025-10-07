import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import SEO from "../../../ReuseComponents/SEO";

gsap.registerPlugin(ScrollTrigger);

const countersData = [
  { id: 1, label: "Projects Completed", target: 1200 },
  { id: 2, label: "Happy Clients", target: 875 },
  { id: 3, label: "Awards Won", target: 15 },
  { id: 4, label: "Years of Experience", target: 10 },
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

const images = {
  design1:
    "https://tse2.mm.bing.net/th/id/OIP.6YtZEq1BWUbmlKVDfabfgAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  design2:
    "https://www.intechnic.com/hubfs/Imported_Blog_Media/SMALL-Secrets-of-successful-websites-graphic-design-3.jpg",
  typing:
    "https://tse3.mm.bing.net/th/id/OIP.Ysk36nBgJAEihfvfa-RNWwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3",
  dashboard:
    "https://tse2.mm.bing.net/th/id/OIP.6YtZEq1BWUbmlKVDfabfgAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  mug: "https://www.intechnic.com/hubfs/Imported_Blog_Media/SMALL-Secrets-of-successful-websites-graphic-design-3.jpg",
  phone:
    "https://tse3.mm.bing.net/th/id/OIP.Ysk36nBgJAEihfvfa-RNWwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3",
};

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

const WebsiteReDesign = () => {
  const detailsRef = useRef(null);
  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // Hero and details animation with GSAP + ScrollTrigger
  useEffect(() => {
    if (!detailsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        detailsRef.current,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, detailsRef);

    return () => ctx.revert();
  }, []);

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
  }, []);

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
                title="Home page | Shanmugavel Portfolio"
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
      <section className="relative h-[100vh] flex flex-col md:flex-row items-center justify-start px-4 sm:px-8 lg:px-16 py-12">
        {/* Left Side Content */}
        <div
          className="relative z-10 w-full md:w-1/2 flex flex-col justify-center bg-primary shadow-lg p-8"
          ref={detailsRef}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-accent tracking-wide">
            <span className="text-secondary">Your Trusted</span> Web Design
            Company in Chennai
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            impedit in maiores itaque, cum suscipit et assumenda praesentium
            quia facere perspiciatis, eum dolorem totam quos numquam ullam eius
            ut. Aut autem atque modi! Minus, nihil?
          </p>
          <a
            href="/contact"
            className="bg-primary w-[60%] md:w-[25%] mt-2 px-6 py-3 rounded-full font-semibold shadow-md border border-2 border-accent hover:bg-accent transition"
          >
            Learn More →
          </a>
        </div>

        {/* Right Side Image */}
        <div className="md:block hidden relative md:absolute md:right-30 md:top-20 h-[100vh] md:h-full w-full md:w-[60%] overflow-hidden mt-6 md:mt-0">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125327355/original/5616b84292a424fafd40ee9dd12071f9e4832994/design-and-develop-a-stunning-wordpress-website.jpg"
            alt="Your Company website design portfolio"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 bg-white">
        <div className="relative mt-16 text-end">
          <h2 className="text-3xl sm:text-5xl text-accent font-extrabold mb-6 tracking-widest">
            <span className="text-secondary">Our</span> Web Design Services
          </h2>
        </div>
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative flex items-start py-10">
            {/* Section Number Behind Title */}
            <div className="absolute left-0 top-2 text-[90px] font-bold text-gray-300 z-0 pointer-events-none select-none">
              01
            </div>
            {/* Content Block */}
            <div className="relative w-full flex flex-col">
              {/* Title (left aligned) */}
              <h2 className="font-semibold text-2xl text-gray-800 mb-4 ml-0 z-10 relative">
                Responsive Web Design
              </h2>
              {/* Centered Paragraph (aligned center-to-right) */}
              <div className="flex">
                <div className="flex-1"></div>
                <p className="w-full md:w-[60%] text-gray-500 leading-relaxed text-center md:text-right">
                  Integer vel sollicitudin justo. Morbi odio ligula, imperdiet
                  eget placerat nec, suscipit ut urna. Aliquam erat volutpat.
                  Cras vel sollicitudin felis. Curabitur erat eros, consectetur
                  eu nibh eu, sodales commodo nisi. Integer placerat sed purus
                  eu ullamcorper.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start">
            <img
              src={images.design1}
              alt=""
              loading="lazy"
              className="w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
            <img
              src={images.design2}
              alt=""
              loading="lazy"
              className="md:block hidden w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start">
            <img
              src={images.typing}
              alt=""
              loading="lazy"
              className="w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
            <img
              src={images.dashboard}
              alt=""
              loading="lazy"
              className="md:block hidden w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
          </div>

          <div className="relative flex items-start py-10">
            <div className="text-[90px] font-bold text-gray-300 absolute z-0 pointer-events-none left-0 top-2 select-none">
              02
            </div>
            <div className="relative w-full flex flex-col">
              <h2 className="font-semibold text-2xl text-gray-800 mb-4 ml-0 z-10 relative">
                Individual Approach
              </h2>
              <div className="flex">
                <div className="flex-1"></div>
                <p className="w-full md:w-[60%] text-gray-500 leading-relaxed text-right">
                  Donec eget molestie neque, dapibus lacinia elit. Aenean non
                  erat et metus pulvinar dapibus. Maecenas eros erat, blandit
                  eget arcu in, interdum ultricies neque. Praesent egestas
                  tortor vitae congue luctus. Integer leo turpis, venenatis et
                  lectus in, dictum egestas nibh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative flex items-start py-10">
            <div className="text-[90px] font-bold text-gray-300 absolute pointer-events-none left-0 top-2 z-0 select-none">
              03
            </div>
            <div className="relative w-full flex flex-col">
              <h2 className="font-semibold text-2xl text-gray-800 mb-4 ml-0 z-10 relative">
                Spectaculous Support
              </h2>
              <div className="flex">
                <div className="flex-1"></div>
                <p className="w-full md:w-[60%] text-gray-500 leading-relaxed text-right">
                  Maecenas eros erat, blandit eget arcu in, interdum ultricies
                  neque. Praesent egestas tortor vitae congue luctus. Integer
                  leo turpis, venenatis et lectus in, dictum egestas nibh.
                  Phasellus rutrum odio quis sem dapibus.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start">
            <img
              src={images.mug}
              alt=""
              loading="lazy"
              className="w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
            <img
              src={images.phone}
              alt=""
              loading="lazy"
              className="md:block hidden w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start">
            <img
              src={images.typing}
              alt=""
              loading="lazy"
              className="w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
            <img
              src={images.dashboard}
              alt=""
              loading="lazy"
              className="md:block hidden w-full md:w-1/2 aspect-[4/3] object-cover shadow-md"
            />
          </div>

          <div className="relative flex items-start py-10">
            <div className="text-[90px] font-bold text-gray-300 absolute z-0 pointer-events-none left-0 top-2 select-none">
              04
            </div>
            <div className="relative w-full flex flex-col">
              <h2 className="font-semibold text-2xl text-gray-800 mb-4 ml-0 z-10 relative">
                Individual Approach
              </h2>
              <div className="flex">
                <div className="flex-1"></div>
                <p className="w-full md:w-[60%] text-gray-500 leading-relaxed text-right">
                  Donec eget molestie neque, dapibus lacinia elit. Aenean non
                  erat et metus pulvinar dapibus. Maecenas eros erat, blandit
                  eget arcu in, interdum ultricies neque. Praesent egestas
                  tortor vitae congue luctus. Integer leo turpis, venenatis et
                  lectus in, dictum egestas nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
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

      
      <section>
        <ClientCarousel logos={logos} />
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

export default WebsiteReDesign;
