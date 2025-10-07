import SEO from "../../../ReuseComponents/SEO";
import React, { useEffect, useRef, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeOnScroll from "../../../ReuseComponents/FadeOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import { Navigation, Pagination } from "swiper/modules";
import { FaCheckCircle, FaStar, FaBolt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoDesign = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation only once
    });
  }, []);


  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const [swiperInstance, setSwiperInstance] = useState(null);


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


  const slidesData = [
    {
      title: "Slide 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius illum odit rem voluptate harum! Doloribus molestiae alias tempora saepe?",
    },
    {
      title: "Slide 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius illum odit rem voluptate harum! Doloribus molestiae alias tempora saepe?",
    },
    {
      title: "Slide 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius illum odit rem voluptate harum! Doloribus molestiae alias tempora saepe?",
    },
    {
      title: "Slide 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius illum odit rem voluptate harum! Doloribus molestiae alias tempora saepe?",
    },
  ];

const countersData = useMemo(() => [
  { id: 1, label: "Projects Completed", target: 1200 },
  { id: 2, label: "Happy Clients", target: 875 },
  { id: 3, label: "Awards Won", target: 15 },
  { id: 4, label: "Years of Experience", target: 10 },
], []); // empty dependency array to memoize once on mount


  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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

      <section className="w-full relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-14">
            {/* Left Column */}
            <FadeOnScroll>
              <div className="flex flex-col w-full h-full">
                {/* Top Content Div */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 md:w-[80vh]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    title title
                  </h3>
                  <p className="text-gray-700 text-sm">
                    This section contains information about the image below,
                    explaining its context or relevance. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Odit nemo velit voluptas
                    quisquam provident dolores nulla modi minus nobis culpa
                    error molestiae aut sapiente eaque aspernatur facere,
                    veritatis necessitatibus repellendus hic voluptatum in! At
                    exercitationem a sequi nostrum, quae fuga accusamus quia
                    molestias omnis voluptas nemo expedita. Explicabo, ipsa
                    placeat.
                  </p>
                </div>

                {/* Image */}
                <img
                  src="https://thumbs.dreamstime.com/b/e-invoice-digital-receipt-statements-e-invoice-digital-receipt-statements-online-business-275164447.jpg"
                  alt="Hero"
                  className="w-full object-cover"
                />
              </div>
            </FadeOnScroll>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-700">
                <span className="text-accent">Digital Marketing</span> Expert
              </h2>
              <p className="text-gray-700 md:w-[60vh] text-base md:text-lg mb-4">
                We help businesses grow online through SEO, social media, and
                content marketing.
              </p>
              <button className="bg-accent text-white py-2 px-6 rounded-lg mt-4 w-max">
                Reach Us
              </button>

              <div className="p-6 rounded-lg shadow-md mt-12">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Additional Information
                </h3>
                <p className="text-gray-700 text-sm">
                  Extra content here. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nam, consectetur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 flex flex-col items-start">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-widest">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            We provide a range of services to help your business grow and
            succeed online.
          </p>
        </div>

        {/* 2-column section */}
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-widest">
              Professional Digital Solutions
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We specialize in delivering end-to-end digital solutions that help
              businesses thrive online. Our services include SEO, social media
              marketing, content creation, and web development.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="w-full h-full">
            <img
              src="https://thumbs.dreamstime.com/b/e-invoice-digital-receipt-statements-e-invoice-digital-receipt-statements-online-business-275164447.jpg"
              alt="Digital Solutions"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 4 Divs */}

        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Div 1 - slightly up */}
          <FadeOnScroll type="up">
            <div className="bg-gray-400 rounded-lg shadow-lg p-6 transform md:-translate-y-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Title 1</h3>
              <p className="text-gray-700 text-sm">
                Some content for div 1. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aspernatur, delectus.
              </p>
            </div>
          </FadeOnScroll>

          {/* Div 2 - normal */}
          <FadeOnScroll>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Title 2</h3>
              <p className="text-gray-700 text-sm">
                Some content for div 2. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi, perspiciatis.
              </p>
            </div>
          </FadeOnScroll>

          {/* Div 3 - pushed down */}
          <FadeOnScroll>
            <div className="bg-gray-400 rounded-lg shadow-lg p-6 transform md:translate-y-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Title 3</h3>
              <p className="text-gray-700 text-sm">
                Some content for div 3. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Facilis, est!
              </p>
            </div>
          </FadeOnScroll>

          {/* Div 4 - slightly up */}
          <FadeOnScroll>
            <div className="bg-white rounded-lg shadow-lg p-6 transform md:translate-y-9">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Title 4</h3>
              <p className="text-gray-700 text-sm">
                Some content for div 4. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aspernatur, delectus.
              </p>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 grid grid-col-1 md:grid-cols-3 gap-6 mt-20">
        {/* Left column - bigger */}
        <div className="col-span-full md:col-span-2 grid md:grid-rows-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 md:tracking-widest">
              Welcome to <span className="text-accent">Our Services</span>
            </h2>
            <p className="text-gray-700 mb-4 w-[40vh] md:w-[60vh]">
              We provide high-quality solutions to help your business grow. Our
              team of experts ensures every project is handled with precision
              and care.
            </p>
            <button className="border border-secondary hover:border-hidden text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition">
              Reach Us
            </button>
          </div>
          <div className="w-[80vh] relative h-64 md:-mt-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3} // <-- Show 3 slides per view
              loop={true}
              onSwiper={setSwiperInstance}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 bg-white border rounded-lg shadow-md h-64 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">
                      {slide.title}
                    </h3>
                    <p className="flex-grow overflow-hidden">{slide.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons with SVG icons */}
            <div className="absolute md:bottom-2 md:-right-30 flex space-x-2 z-10">
              <button
                ref={prevRef}
                className="text-accent font-extrabold p-2 rounded hover:border border-secondary flex items-center justify-center"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="text-accent font-extrabold p-2 rounded hover:border border-secondary flex items-center justify-center"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right column - smaller */}
        <div className="grid col-span-full md:col-span-1 md:grid-rows-2 gap-6">
          {/* First div with normal content */}
          <div className="p-6 rounded md:-ml-40 -ml-5">
            <p className="w-[50vh] md:w-[60vh] text-3xl">
              This is some content in the first div of the right column. You can
              describe features, details, or anything you want.
            </p>
          </div>

          {/* Second div with unordered list and React Icons */}
          <div className="p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">
              Right Bottom Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-accent mr-2" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <FaStar className="text-accent mr-2" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <FaBolt className="text-accent mr-2" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <FaBolt className="text-accent mr-2" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <FaBolt className="text-accent mr-2" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>
          </div>
        </div>
        <style>
          {`
          .swiper-pagination {
            bottom: -20px !important;
          }
        `}
        </style>
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

export default LogoDesign;
