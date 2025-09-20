import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudies from "../../ReuseComponents/CaseStudies";
import Blogs from "../../ReuseComponents/Blogs";

gsap.registerPlugin(ScrollTrigger);

export default function SEOPage() {
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

  const countersData = [
    { id: 1, label: "Projects Completed", target: 1200 },
    { id: 2, label: "Happy Clients", target: 875 },
    { id: 3, label: "Awards Won", target: 15 },
    { id: 4, label: "Years of Experience", target: 10 },
  ];
  const blocks = [
    {
      title: "First Block",
      desc: "Description for first block   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae cumque eaque distinctio quis facilis doloremque possimus voluptatem maiores, blanditiis numquam labore molestias eveniet consequuntur? Impedit dolore dignissimos rerum animi. Dolorum soluta consectetur iure dolorem reprehenderit explicabo obcaecati cum illum maxime magni. Esse dolor laborum quisquam tempore autem sequi! Officiis?",
    },
    {
      title: "Second Block",
      desc: "Description for second block   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae cumque eaque distinctio quis facilis doloremque possimus voluptatem maiores, blanditiis numquam labore molestias eveniet consequuntur? Impedit dolore dignissimos rerum animi. Dolorum soluta consectetur iure dolorem reprehenderit explicabo obcaecati cum illum maxime magni. Esse dolor laborum quisquam tempore autem sequi! Officiis?",
    },
    {
      title: "Third Block",
      desc: "Description for third block   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae cumque eaque distinctio quis facilis doloremque possimus voluptatem maiores, blanditiis numquam labore molestias eveniet consequuntur? Impedit dolore dignissimos rerum animi. Dolorum soluta consectetur iure dolorem reprehenderit explicabo obcaecati cum illum maxime magni. Esse dolor laborum quisquam tempore autem sequi! Officiis?",
    },
    {
      title: "Fourth Block",
      desc: "Description for fourth block   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae cumque eaque distinctio quis facilis doloremque possimus voluptatem maiores, blanditiis numquam labore molestias eveniet consequuntur? Impedit dolore dignissimos rerum animi. Dolorum soluta consectetur iure dolorem reprehenderit explicabo obcaecati cum illum maxime magni. Esse dolor laborum quisquam tempore autem sequi! Officiis?",
    },
    {
      title: "Fifth Block",
      desc: "Description for fifth block   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae cumque eaque distinctio quis facilis doloremque possimus voluptatem maiores, blanditiis numquam labore molestias eveniet consequuntur? Impedit dolore dignissimos rerum animi. Dolorum soluta consectetur iure dolorem reprehenderit explicabo obcaecati cum illum maxime magni. Esse dolor laborum quisquam tempore autem sequi! Officiis?",
    },
  ];

  const [counts, setCounts] = useState(countersData.map(() => 0));
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const descRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const advanRef = useRef(null);

  const trustedClients = [
    "REDEFINED /",
    "BRANDING /",
    "LOGO DESIGN /",
    "DIGITAL STRATEGY /",
    "CREATIVE SOLUTIONS /",
  ];

  // ✅ BATCHED GSAP/ScrollTrigger setup (fade-left, fade-right, parallax)
  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
      // === Existing batch animations ===
      ScrollTrigger.batch(".fade-left", {
        onEnter: (batch) =>
          gsap.from(batch, { x: -50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      ScrollTrigger.batch(".fade-right", {
        onEnter: (batch) =>
          gsap.from(batch, { x: 50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      ScrollTrigger.batch(".fade-up", {
        onEnter: (batch) =>
          gsap.from(batch, { y: 50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      // === Parallax images ===
      gsap.utils.toArray(".parallax-image").forEach((img, i) => {
        const depth = (i + 1) * 15;
        gsap.fromTo(
          img,
          { y: 0, scale: 1.05, opacity: 0.8 },
          {
            y: -depth,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // === Rendering optimization ===
      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(".parallax-image", { willChange: "transform" });
      });
    });

    return () => ctx.revert();
  }, []);

  //left sticky right panel
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions.isDesktop) {
          ScrollTrigger.create({
            trigger: advanRef.current,
            start: "top top+=80",
            end: () => `bottom bottom-=100`,
            pin: leftRef.current,
            pinSpacing: true,
            scrub: true,
          });
        }
        // no pin for mobile screens
      }
    );

    return () => mm.revert();
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

  // ✅ Counter animation (one trigger + one tween)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const proxy = { p: 0 };
          gsap.to(proxy, {
            p: 1,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => {
              setCounts(
                countersData.map((c) =>
                  Math.floor(gsap.utils.interpolate(0, c.target, proxy.p))
                )
              );
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keep your hero text animation
  useEffect(() => {
    if (!descRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      descRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    return () => {
      tl.kill();
      gsap.set(descRef.current, { opacity: 0, x: -100 });
    };
  }, [current]);

  const heroSlides = [
    {
      desc: "Result-driven digital marketing services for global impact.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      desc: "Innovative strategies for measurable results.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      desc: "Transform your business with our expertise.",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="page-container">
      {/* === HERO SECTION === */}
      <section className="relative h-[110vh] flex items-center overflow-visible">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="absolute inset-0 w-full h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.img}
                  loading="lazy"
                  alt="Hero background"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
                <div className="relative z-20 flex items-center h-full px-4 md:px-20 max-w-xl">
                  <p
                    ref={current === idx ? descRef : null}
                    className="text-white text-base sm:text-lg md:text-2xl font-semibold max-w-md"
                  >
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-pagination {
            position: absolute !important;
            bottom: 6rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: auto !important;
            text-align: center !important;
            z-index: 50 !important;
          }

          .custom-bullet {
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background: #837f7fff !important;
            opacity: 0.5 !important;
            margin: 0 6px !important;
            display: inline-block !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
          }

          .custom-bullet:hover {
            opacity: 0.8 !important;
          }

          .custom-bullet.swiper-pagination-bullet-active {
            border-radius: 0 !important;
            background: #fb0000 !important;
            opacity: 1 !important;
            width: 14px !important;
            height: 14px !important;
          }
        `}</style>
      </section>

      {/* Section 2 - Work Showcase */}
      <CaseStudies />

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Wrapper for title and arrow */}
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-0 text-left">
            How <span className="text-accent font-semiBold">BMW</span> Collate
            SEO Service
          </h2>

          <div
            onClick={toggleExpand}
            style={{
              cursor: "pointer",
              width: 50,
              height: 50,
              userSelect: "none",
            }}
            className="sm:absolute sm:bottom-[10px] sm:right-[30px]"
            aria-label="Toggle content"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") toggleExpand();
            }}
          >
            <DotLottieReact
              src="https://lottie.host/d1a841a3-10d7-4443-91ad-c3753256b703/XR4wG0rXKV.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Expandable content */}
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight: isExpanded ? "500px" : "0px",
          }}
        >
          <div
            className="mt-4 sm:mt-6 text-gray-700"
            style={{
              maxWidth: "1500px",
              letterSpacing: "0.05em",
              lineHeight: "1.75",
            }}
          >
            <p>
              This is the extra content that appears when you click the arrow.
              You can place any info here like details about BMW's SEO services,
              steps, case studies, or whatever you want!
            </p>
            <p>
              Add more paragraphs or elements to fill this expanded section as
              needed.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start px-8 md:pl-32 md:pr-16 mx-auto pt-16 relative">
        {/* Left column - text content */}
        <div className="flex flex-col items-start justify-start self-start">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">Your Heading</h2>
            <p className="md:block hidden text-gray-700">
              This is the content section. It will stay on the left side and be
              left-aligned. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minus, blanditiis placeat accusantium voluptas cumque
              dolorum, eaque ratione nobis consequatur dolores tempora labore
              cum fugiat quos, deleniti vero autem molestias et? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officia modi harum
              deleniti amet, vel obcaecati. Dignissimos maxime veniam minima.
              Culpa perferendis sed pariatur fuga eligendi, distinctio vel
              provident eum ad. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Reprehenderit similique cum numquam repellendus
              illum, error minus iste! Nulla nobis asperiores, dolor magnam eum,
              tenetur debitis suscipit esse assumenda pariatur facilis. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              reiciendis.
            </p>

            <p className="md:hidden block text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nisi ratione modi magni culpa fugit facere sunt illo laboriosam
              inventore, dolore earum similique rerum dolorem molestias
              cupiditate a consequuntur accusantium!
            </p>
          </div>
        </div>

        {/* Right column - image */}
        <div className="flex justify-center md:justify-start relative">
          <img
            src="https://img.freepik.com/premium-photo/one-most-beautiful-countries-that-people-travel-kasmir_924629-3817.jpg"
            alt="Example"
            loading="lazy"
            className="w-full h-[500px] max-w-sm object-cover relative -ml-6 z-20"
          />

          {/* Black thin line */}
          <div className="md:block hidden absolute top-0 h-[750px] left-[100px] w-[2px] bg-black -mt-10 z-10"></div>
        </div>
      </div>

      {/* Gray box overlapping both columns */}
      <div className="md:block hidden bg-gray-400 text-white px-6 py-6 w-[700px] relative -mt-32 md:ml-32 -mr-32">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum
          illum, error, sed est reprehenderit voluptas hic eum non ea quia. Ut
          quos assumenda, impedit voluptates voluptas incidunt alias porro?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          optio eveniet nam cum harum voluptatibus dolore magnam et repellendus
          illum, minus saepe laudantium veritatis est nisi temporibus aliquam
          iste amet!
        </p>
      </div>

      <div className="py-12 px-4 sm:py-16 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left">
          {/* Left text */}
          <div className="sm:px-16 text-black text-lg font-semibold mb-4 sm:mb-0">
            <span className="font-extrabold text-xl sm:text-2xl">
              Speak with our SEO Expert{" "}
              <span className="inline-block transform scale-x-300">→</span>
            </span>
          </div>

          {/* Right phone link */}
          <a
            href="tel:+919944332064"
            className="border-2 border-black hover:border-accent text-black font-semibold px-4 py-2 rounded flex items-center justify-center hover:bg-accent transition sm:mx-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2l3 7-2 2 4 4 2-2 7 3v2a2 2 0 01-2 2h-1a16 16 0 01-15-15V5z"
              />
            </svg>
            +91 9944332064
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-7xl mx-auto px-4 sm:px-8 py-8 gap-6 sm:gap-8">
        {/* Left column - content */}
        <div className="flex-1">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 px-2 sm:px-6 lg:px-10">
              Leading <span className="text-accent">SEO</span> Marketing
            </h2>
            <p className="text-gray-700 px-2 sm:px-6 lg:px-10 mb-4">
              This is your content. It starts from the top left with proper
              margins. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae quaerat dicta eius odit repellat odio suscipit, harum
              ab illum veritatis ratione incidunt doloremque, rerum,
              reprehenderit nam libero quia voluptas quod.
            </p>

            <p className="text-gray-700 px-2 sm:px-6 lg:px-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus suscipit quibusdam labore officiis vitae temporibus,
              cum voluptate harum dicta beatae. Natus fugiat, molestiae rerum
              deserunt quibusdam ducimus tenetur illo quo.
            </p>

            <p className="text-gray-700 px-2 sm:px-6 lg:px-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, error.
            </p>

            <p className="text-gray-700 px-2 sm:px-6 lg:px-10 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto ut eligendi consectetur consequatur ipsum eius,
              accusamus harum illo vero at.
            </p>

            <p className="text-gray-700 px-2 sm:px-6 lg:px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              cumque voluptatibus suscipit, repellendus minima in porro placeat!
            </p>
          </div>
        </div>

        {/* Right column - image */}
        <div className="flex-1 flex items-center justify-center mt-6 sm:mt-0">
          <img
            src="https://cdn.pixabay.com/photo/2022/12/28/11/55/seo-7682705_640.png"
            alt="Side Image"
            loading="lazy"
            className="w-full sm:w-auto max-w-sm h-auto object-cover rounded-lg"
          />
        </div>
      </div>

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

      {/* content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 fade-left">
          <h2 className="text-3xl text-gray-900 mb-4 text-left">
            Our Creative{" "}
            <span className="text-accent font-semiBold">Services</span>
          </h2>
        </div>

        {/* Single column block */}
        <div className="w-full mx-auto mb-12 fade-right">
          <h3 className="text-2xl font-bold mb-2 text-left">
            Strategic Planning
          </h3>
          <p className="text-left text-sm text-gray-700">
            We help define strategic goals to maximize impact and growth for
            your business.
          </p>
        </div>

        {/* Horizontal container */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 max-w-7xl mx-auto overflow-visible">
          <div className="w-full md:w-[600px] flex-shrink-0 fade-left">
            <h3 className="text-2xl font-bold mb-2 text-left">
              Creative Design
            </h3>
            <p className="text-left text-sm text-gray-700">
              Crafting visual content that resonates with your audience and
              enhances brand identity.
            </p>
            <button
              className="w-40 h-10 mt-6 md:mt-12 flex items-center text-sm justify-center hover:bg-accent transition border-2 border-gray-300"
              aria-label="Learn more"
            >
              Get in touch <span>→</span>
            </button>
          </div>

          <div className="w-full md:w-[600px] md:h-[300px] flex-shrink-0 bg-black text-white px-6 md:px-8 py-8 flex flex-col justify-center text-left fade-right">
            <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-sm">
              Implementing data-driven marketing campaigns that deliver
              measurable results.
            </p>
          </div>
        </div>

        {/* Image + content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-[400px] mt-6 md:mt-0">
          <div className="w-full md:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Sharp"
              loading="lazy"
              className="h-64 md:h-full w-full object-cover parallax-image"
            />
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center px-6 md:px-8 fade-right mt-6 md:mt-0">
            <div className="max-w-sm w-full">
              <h3 className="text-2xl font-bold mb-4 text-left">
                Innovative Solutions
              </h3>
              <p className="text-left text-sm text-gray-700">
                Delivering tailored creative solutions that align with your
                brand's vision and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Last block */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-[400px] relative mt-6 md:mt-0">
          <div className="w-full md:w-3/5 flex flex-col justify-center px-6 md:px-8 fade-left">
            <h3 className="text-2xl font-bold mb-4 text-left">
              Collaborative Approach
            </h3>
            <p className="text-left text-sm text-gray-700 max-w-md mb-6 md:mb-20">
              Working closely with clients to ensure every project is a success
              through clear communication.
            </p>
            <button className="mt-4 border-2 text-black px-4 py-2 text-sm font-medium w-40 transition-all duration-300 hover:bg-accent hover:text-white">
              Get in touch <span>→</span>
            </button>
          </div>
          <div className="w-full md:w-2/5 relative mt-6 md:mt-0 flex justify-center md:block">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Sharp"
              loading="lazy"
              className="h-64 md:h-[550px] w-full md:w-[80%] object-cover md:absolute md:top-[-120px] parallax-image"
              style={{ left: "-40px", zIndex: 10 }}
            />
          </div>
        </div>

        {/* Last row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-6 md:-mt-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-black flex flex-col justify-center px-6 md:px-8 py-6 fade-left h-auto md:h-60 relative z-10">
            <h3 className="text-xl font-bold text-white mb-1">Left Title</h3>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis iusto dolor fuga. Commodi, aliquam quibusdam veniam
              distinctio cumque placeat tempora sunt. Repellendus, quasi
              accusantium libero similique fugit quos quam dolore!
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex items-center justify-center fade-right relative mt-6 md:mt-0">
            <div className="max-w-xs text-left">
              <h3 className="text-xl font-bold text-black mb-1">Right Title</h3>
              <p className="text-black text-sm">
                quos aliquam eligendi harum excepturi facere voluptatum eum
                natus ipsam veniam ea similique ducimus?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Experties */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl flex justify-center mb-16 gap-4">
          Industry-Specific <span className="text-accent">SEO Expertise</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8">
          {[
            {
              img: "https://static.vecteezy.com/system/resources/previews/020/168/962/non_2x/seo-search-engine-optimization-minimal-flat-logo-seo-logo-with-magnifying-glass-and-arrow-vector.jpg",
              title: "SEO Strategy",
              desc: "Search Engine Optimization Strategies",
            },
            {
              img: "https://static.vecteezy.com/system/resources/previews/020/096/067/non_2x/seo-analytics-icon-in-comic-style-social-media-cartoon-illustration-on-white-isolated-background-search-analysis-business-concept-splash-effect-vector.jpg",
              title: "Analytics",
              desc: "Analytics & Performance Tracking",
            },
            {
              img: "https://tse3.mm.bing.net/th/id/OIP.HT_dM4CxmCGY_jMahzfNVwHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
              title: "On-Page SEO",
              desc: "On-Page SEO Optimization",
            },
            {
              img: "https://img.freepik.com/premium-photo/seo-3d-illustration-isolated-white-background_1027215-309.jpg?w=2000",
              title: "Off-Page SEO",
              desc: "Off-Page Link Building",
            },
            {
              img: "https://static.vecteezy.com/system/resources/previews/005/110/840/original/seo-illustration-on-a-transparent-background-premium-quality-symbols-line-flat-color-icon-for-concept-and-graphic-design-vector.jpg",
              title: "Content",
              desc: "Content Marketing",
            },
            {
              img: "https://static.vecteezy.com/system/resources/previews/002/214/070/original/flat-design-concept-seo-search-engine-optimize-illustrate-free-vector.jpg",
              title: "Technical",
              desc: "Technical SEO",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden px-4">
              {/* Image with grayscale */}
              <img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="h-80 w-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sliding gray overlay */}
              <div className="absolute inset-0 bg-gray-400 bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

              {/* Title & Description */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-black group-hover:text-accent text-lg font-bold transition-colors duration-300 group-hover:-translate-y-1">
                  {item.title}
                </h3>
                <p className="text-white text-lg mt-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Scroll Section */}
      <section
        ref={advanRef}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row py-20 px-4 sm:px-6"
      >
        {/* Left sticky image (will be pinned by GSAP ScrollTrigger) */}
        <div
          ref={leftRef}
          className="w-full lg:w-1/2 h-[200px] sm:h-[400px] lg:h-[500px]"
        >
          <img
            src="https://alreadysetup.com/wp-content/uploads/SEO-image1.jpg"
            loading="lazy"
            alt="Sticky"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right scrolling content */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 flex flex-col gap-16 sm:gap-24 lg:gap-32 mt-8 lg:mt-0"
        >
          {blocks.map((block, index) => (
            <div key={index} className="w-full right-item">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-left hover:text-accent">
                {block.title}
              </h2>
              <p className="text-gray-600 text-left text-sm sm:text-base text-justify">
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <Blogs category="seo" />

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
}
