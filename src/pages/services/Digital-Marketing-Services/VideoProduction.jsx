import SEO from "../../../ReuseComponents/SEO";
import React, { useEffect, useRef, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeOnScroll from "../../../ReuseComponents/FadeOnScroll";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoProduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation only once
    });
  }, []);

  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const trustedClients = [
    "REDEFINED /",
    "BRANDING /",
    "LOGO DESIGN /",
    "DIGITAL STRATEGY /",
    "CREATIVE SOLUTIONS /",
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
      {/* about section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Floating accent block */}
          <div className="absolute -top-10 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

          {/* Hero copy - strong intro */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
              Video that <span className="text-accent">Moves</span> People
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              In a world flooded with content, we focus on emotion. Our video
              production approach blends art direction, storytelling, and
              precision editing to make your brand stand out — and stay
              remembered.
            </p>
          </div>

          {/* Section 2 - floating text & image */}
          <div className="relative flex flex-col lg:flex-row items-start gap-16 mb-28">
            {/* Left content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black mb-4">
                From Script to Screen
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Every project begins with strategy — defining the story that
                aligns with your goals. We script, storyboard, and craft scenes
                that capture your audience’s attention within seconds.
              </p>
              <p className="text-gray-600">
                Our editors and directors work hand-in-hand to ensure your
                message flows seamlessly from first frame to final cut.
              </p>
            </div>

            {/* Floating image on right with negative margin */}
            <FadeOnScroll type="right">
              <div className="flex-1 relative -mt-10 lg:-mt-24">
                <img
                  src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/64705e1c16007d80f085a467_Blog-Cover-2022_03_The-Ultimate-Guide-to-Corporate-Video-Production-(1).jpeg"
                  alt="Camera crew"
                  className="shadow-2xl w-full max-w-md mx-auto lg:mx-0 object-cover"
                />
                <div className="absolute bottom-5 -right-10 bg-accent text-white py-3 px-6 rounded-xl shadow-md">
                  <p className="font-semibold text-sm">
                    Behind every shot: precision & story
                  </p>
                </div>
              </div>
            </FadeOnScroll>
          </div>

          {/* Section 3 - reversed layout with text overlap */}
          <div className="relative flex flex-col lg:flex-row items-center gap-16">
            {/* Right image with overlap */}
            <FadeOnScroll type="left">
              <div className="flex-1 order-2 lg:order-1 relative">
                <img
                  src="https://stillnmotion.com/wp-content/uploads/2019/01/Still-N-Motion_San-Jose-video-studio-rental-music-video.jpg"
                  alt="Studio editing"
                  className="shadow-xl w-full max-w-xl mx-auto lg:mx-0 lg:-ml-10 object-cover"
                />
              </div>
            </FadeOnScroll>

            {/* Left text with negative margin up */}
            <div className="flex-1 order-1 lg:order-2 relative z-10 -mt-10 lg:-mt-16">
              <h3 className="text-3xl font-bold text-black mb-4">
                The Power of Editing
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Post-production isn’t just cutting clips — it’s where emotion
                takes shape. With color grading, pacing, and sound design, we
                turn raw footage into stories that captivate.
              </p>
              <p className="text-gray-600">
                The smallest transitions, light flares, and frame pauses — they
                make your message unforgettable.
              </p>
            </div>
          </div>

          {/* CTA overlap section */}
          <FadeOnScroll type="right">
            <div className="relative max-w-4xl mx-auto mt-28 bg-black text-white rounded-3xl p-10 md:p-16 shadow-2xl -mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                Let’s Tell Your Story in Motion
              </h3>
              <p className="text-gray-300 mb-6">
                We combine storytelling and strategy to produce videos that
                connect with hearts and minds — from short-form social clips to
                brand documentaries.
              </p>
              <button className="px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition">
                Start a Project
              </button>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      <section className="relative w-full py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

    {/* Floating Background Words */}
    <h1 className="absolute -top-12 left-0 text-[8rem] md:text-[12rem] font-black text-black/5 select-none leading-none">
      VIDEO
    </h1>
    <h1 className="absolute bottom-0 right-0 text-[8rem] md:text-[12rem] font-black text-black/5 select-none leading-none">
      PRODUCTION
    </h1>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center">
      
      {/* Left Side Text */}
      <div className="flex-1 mb-16 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Transform <span className="text-accent">Ideas</span> Into Motion
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We bring your vision to life through powerful storytelling and cinematic visuals. 
          From creative direction to final cut, our team crafts every frame to resonate deeply with your audience.
        </p>
      </div>

      {/* Right Content Block */}
      <div className="flex-1 relative md:-mt-16 md:ml-20">
        <p className="text-xl font-semibold text-gray-900 mb-4">
          Every second counts on screen.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our approach to video production blends creativity and precision—ensuring your brand 
          message not only looks great but connects authentically. We handle everything from 
          concept shoots to post-production with seamless execution.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          Our approach to video production blends creativity and precision—ensuring your brand 
          message not only looks great but connects authentically. We handle everything from 
          concept shoots to post-production with seamless execution.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          Our approach to video production blends creativity and precision—ensuring your brand 
          message not only looks great but connects authentically. We handle everything from 
          concept shoots to post-production with seamless execution.
        </p>
      </div>
    </div>

    {/* Floating Quote / Accent Section */}
    <div className="relative z-10 mt-24 md:ml-40">
      <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
        “Stories are remembered when <span className="text-accent">emotion</span> meets motion.”
      </p>
      <div className="w-24 h-[4px] bg-accent mt-4"></div>
    </div>
  </div>
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

      {/* WHY US */}
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

      {/* UPS */}
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

      {/* CLIENTS */}
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

export default VideoProduction;
