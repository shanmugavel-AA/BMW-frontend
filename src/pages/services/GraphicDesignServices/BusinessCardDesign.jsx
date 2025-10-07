import React, { useRef, useState, useEffect, useMemo } from "react";
import SEO from "../../../ReuseComponents/SEO";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import CarouselOne from "../../../ReuseComponents/CarouselOne";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://picsum.photos/id/1015/400/600",
  "https://picsum.photos/id/1016/400/600",
  "https://picsum.photos/id/1018/400/600",
  "https://picsum.photos/id/1020/400/600",
  "https://picsum.photos/id/1021/400/600",
];

const BusinessCardDesign = () => {
  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const Navigate = useNavigate();

  const slides = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }

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

  const image = [
    {
      src: "https://cdn.dribbble.com/users/3920274/screenshots/15353843/creative_box_packaging_design_4x.jpg",
      alt: "Google",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/404/2e6e7f190767875.Y3JvcCwxMzM0LDEwNDMsMzMsMjY.jpg",
      alt: "Meta",
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/404/eb7783148600599.Y3JvcCw5ODMsNzY5LDE0OCww.jpg",
      alt: "Amazon",
    },
    {
      src: "https://shitlapapers.com/wp-content/uploads/2023/07/three-colorful-bags-different-colors-with-word-killalona-them-1024x1024.jpg",
      alt: "Microsoft",
    },
    {
      src: "https://worldbranddesign.com/wp-content/uploads/2022/06/98.jpg",
      alt: "Apple",
    },
  ];

  const countersData = useMemo(
    () => [
      { id: 1, label: "Projects Completed", target: 1200 },
      { id: 2, label: "Happy Clients", target: 875 },
      { id: 3, label: "Awards Won", target: 15 },
      { id: 4, label: "Years of Experience", target: 10 },
    ],
    []
  ); // empty dependency array to memoize once on mount

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
          title="Logo Design Services | Shanmugavel Portfolio"
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

      <section className="max-w-7xl mx-auto relative px-12 py-16 h-[32rem]">
        <div className="absolute top-8 right-30 max-w-md">
          {/* Content at top left */}
          <h2 className="text-3xl font-extrabold">
            Our <span className="text-accent">Package Design</span> Service
          </h2>
          <p className="mt-2 text-sm w-[70vh]">
            This content is at the top left. Add any text or components here.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur molestias voluptatem provident maiores quidem magni
            placeat iste! Incidunt quo, magnam maxime voluptates eveniet
            pariatur velit, nihil doloremque, eum iusto minus.
          </p>
        </div>

        <div className="absolute top-68 right-30 max-w-md">
          {/* Content at top left */}
          <CarouselOne logos={image} />
        </div>

        <div className="absolute bottom-10 left-20 w-[30rem] h-96">
          {/* Image at bottom right */}
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.BCiGEvx6DiAQ_mdbrQPXLwHaFZ?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Descriptive alt text"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {/* 1 - small content */}
          <div className="p-4 text-center">
            <h2 className="text-3xl font-extrabold text-accent">
              Lorem, ipsum dolor.
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo at, velit iure illo, ut quaerat doloremque ducimus
              iusto, veritatis modi dicta ad praesentium reiciendis nemo!
            </p>
          </div>

          {/* 2 - small content */}
          <div className="p-4 text-center">
            <h2 className="text-3xl font-extrabold text-accent">
              Lorem, ipsum dolor.
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              sapiente laboriosam fugit aspernatur enim temporibus labore,
              nesciunt culpa. Ex ea non reiciendis nobis soluta quia.
            </p>
          </div>

          {/* 4 - big image spanning 2 rows */}
          <div className="col-span-2 row-span-2">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0363d117492937.6076dc60e7ff3.jpg"
              alt="Big Image 4"
              className="w-full h-[50vh] object-cover rounded"
            />
          </div>

          {/* 3 - big image spanning 2 cols in row 1 */}
          <div className="col-span-2 row-start-1 bg-gray-300">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.PqeyUNqiOEiBLruURdJHXAHaHb?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Big Image 3"
              className="w-full h-[50vh] object-cover rounded"
            />
          </div>

          {/* 5 - small content (below big image 4) */}
          <div className="col-start-3 row-start-1 bg-gray-200 p-4 text-center">
            <h2 className="text-3xl font-extrabold text-accent">Lorem, ipsum dolor.</h2>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi tempora hic accusamus unde magnam repellat non ea quod.
              Quo vitae maxime omnis autem incidunt?
            </p>
          </div>

          {/* 6 - small content (below big image 4) */}
          <div className="col-start-4 row-start-2 bg-gray-200 p-4 text-center">
            <h2 className="text-3xl font-extrabold text-accent">Lorem, ipsum dolor.</h2>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel
              corrupti perferendis unde sapiente. Blanditiis harum suscipit
              molestias nobis sint, quasi quaerat aliquid sed beatae.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-8">
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

export default BusinessCardDesign;
