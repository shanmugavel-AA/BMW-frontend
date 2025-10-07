import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import SEO from "../../../ReuseComponents/SEO";

gsap.registerPlugin(ScrollTrigger);

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

const WebDevelopment = () => {
  const heroRef = useRef(null);
  const detailsRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

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

  useLayoutEffect(() => {
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
        <div className="max-w-3xl px-6 text-white text-center" ref={heroRef}>
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

      <section
        id="details"
        className="relative z-10 flex flex-col items-center justify-start px-6 pt-20 rounded-t-[60px] max-w-screen-2xl mx-auto bg-white"
        aria-label="Service Details"
      >
        <div className="max-w-7xl mx-auto px-6 py-12" ref={detailsRef}>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Service Details
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Our web development services include building responsive and
            user-friendly websites that drive engagement and conversions.
          </p>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white">
        {/* Left Image */}
        <div className="flex items-start">
          <img
            src="https://images.creativemarket.com/0.1.0/ps/2574705/1400/2500/m1/fpnw/wm0/960_grid_12_col-ok-.jpg?1492757681&s=08c431716a8fc16dd890176eeb290d38"
            alt="Left"
            className="w-[500px] h-[500px] object-cover self-start relative -mt-32"
          />
        </div>

        {/* Center with 2 Rows */}
        <div className="flex flex-col justify-between gap-6">
          <div className="p-6 bg-white">
            <p className="font-bold text-xl">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et
              qui est, similique ipsum laborum debitis"
            </p>
          </div>

          <div className="md:block hidden p-6 bg-white shadow-md relative -ml-32 -mb-42">
            <p className="text-gray-600 ">
              This is the second row content inside the center column. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolor, ratione
              quisquam officiis repellendus numquam quasi ab fugit, inventore,
              possimus distinctio nam soluta dolore accusantium! Voluptatum,
              aperiam. Molestias libero numquam iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita earum dolor molestiae
              sit delectus ipsam, est praesentium deleniti quas eum accusamus
              necessitatibus saepe odit? Ipsum dolorum optio impedit esse
              facilis.
            </p>
          </div>
        </div>

        {/* Right Big Image */}
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/photos/devices-on-table-with-responsive-design-picture-id614223078?k=6&m=614223078&s=612x612&w=0&h=uLJV6eOu0g72pPyoHCvwtk-2Zb8NXWtMMtjnbX6ESe4="
            alt="Right"
            className="md:block hidden w-full h-[650px] relative -mb-50"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-24 md:py-24 bg-white">
        {/* Heading and paragraph on top */}
        <div className="mb-16 text-center">
          <div className="inline-block w-24 h-1 bg-accent mb-4"></div>
          <h2 className="text-4xl font-bold mb-4 tracking-widest text-gray-900">
            Our Web Development Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide modern, scalable, and customized solutions to help your
            business succeed online. From web development to digital marketing,
            we’ve got you covered.
          </p>
        </div>

        {/* Grid with 3 columns - stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Left side: 2 col span on md+ */}
          <div className="md:col-span-2 space-y-16 md:space-y-20">
            {[
  {
    title: "Web Development",
    paragraph:
      "Build fast, secure, and responsive websites tailored to your needs with the latest technologies.",
  },
  {
    title: "Ecommerce Development",
    paragraph:
      "Custom ecommerce platforms designed to scale, boost conversions, and offer a seamless shopping experience.",
  },
  {
    title: "Content Management Systems",
    paragraph:
      "Empower your team with intuitive CMS solutions that simplify content updates and management.",
  },
  {
    title: "Custom Software Development",
    paragraph:
      "Unique, business-specific solutions that streamline workflows and enhance productivity.",
  },
  {
    title: "Digital Marketing",
    paragraph:
      "Data-driven strategies to increase visibility, improve engagement, and drive customer growth.",
  },
].map(({ title, paragraph }, idx) => (
  <div
    key={idx}
    className={`flex flex-col md:flex-row ${
      idx % 2 === 0 ? "" : "md:flex-row-reverse"
    } items-center md:items-start gap-6`}
  >
    <div className="max-w-xl transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
        <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
        {title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mt-2">
        {paragraph}
      </p>
    </div>
  </div>
))}

          </div>

          {/* Right side image, full width on mobile */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <div className="sticky top-24 max-w-full md:max-w-[360px]">
              <img
                src="https://i.pinimg.com/originals/7b/d6/c8/7bd6c84c93ea1f92555db10e77c49c24.jpg"
                alt="Web Development Illustration"
                className="max-w-full rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
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

      <CaseStudies />

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

export default WebDevelopment;
