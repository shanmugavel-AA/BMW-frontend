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

const InfluencerMarketing = () => {
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
      <section className=" bg-gradient-to-b from-white via-purple-50 to-blue-50 ">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              {/* Left Column: Overlapping Images */}
              <div className="lg:col-span-5 order-1 lg:order-1 relative flex justify-center lg:justify-start">
                <div className="relative w-[280px] sm:w-[360px] md:w-[440px] h-[360px] md:h-[440px]">
                  {/* Image 1 */}
                  <img
                    src="https://trendhero.io/wp-content/uploads/2020/06/influencer-taking-picture-scaled.jpg"
                    alt="Influencer 1"
                    className="absolute -top-10 lg:left-50 w-2/3 h-2/3 object-cover rounded-3xl shadow-2xl -rotate-3"
                  />
                  {/* Image 2 */}
                  <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop"
                    alt="Influencer 2"
                    className="absolute top-12 right-0 lg:left-2 w-2/3 h-2/3 object-cover rounded-3xl shadow-2xl rotate-2"
                  />
                  {/* Image 3 */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
                    alt="Influencer 3"
                    className="absolute top-44 lg:left-44 w-2/3 h-2/3 object-cover rounded-3xl shadow-2xl -rotate-1"
                  />
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="relative lg:col-span-7 order-2 lg:order-2 lg:mt-0 mt-6">
                <div className="max-w-xl">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                    Amplify Your Brand with Influencers
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    Collaborate with top influencers, create authentic
                    campaigns, and reach your target audience effectively.
                  </p>
                  <p className="text-gray-600 text-lg mb-8">
                    Track engagement, optimize campaigns, and grow brand
                    awareness while building trust with real audiences.
                  </p>

                  <div className="absolute -bottom-63 lg:-bottom-45 lg:left-30 lg:w-[80vh] p-6">
                    <h2 className="text-3xl font-bold">Lorem, ipsum dolor.</h2>
                    <p className="text-gray-600 text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur optio obcaecati non totam repudiandae earum aut
                      veritatis asperiores voluptatum consequatur?
                    </p>
                    <a
                      href="#"
                      className="inline-block px-6 py-3 mt-2 rounded-full bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition-colors"
                    >
                      Start Campaign
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            {/* Decorative background blob */}
            <div
              className="absolute -top-20 -left-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
              aria-hidden
            ></div>
            <div
              className="absolute top-32 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
              aria-hidden
            ></div>

            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
              <div className="relative hidden md:block">
                <img
                  src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?cs=srgb&dl=pexels-liza-summer-6347919.jpg&fm=jpg"
                  alt="Influencer lifestyle"
                  className="w-1/2 lg:w-3/4 rounded-3xl shadow-2xl rotate-2"
                />
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.ovYxXiJ4BFp3_hBEy9U7VAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Social engagement"
                  className="absolute -bottom-40 -right-0 w-1/2 rounded-3xl shadow-xl -rotate-3"
                />
              </div>
              
              <div className="lg:mt-0 mt-30">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Build Real Connections with Your Audience
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  Harness the power of authentic influencer storytelling. Our
                  campaigns pair your brand with voices that truly resonate with
                  your target audience.
                </p>
                <p className="text-gray-600 text-lg">
                  Drive engagement, increase awareness, and create lasting
                  emotional connections through content that feels natural — not
                  promotional.
                </p>
                <p className="md:block hidden text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore nisi deleniti dicta, totam quis quod nulla. Officia
                  repellendus aliquam laudantium, provident harum doloribus sunt
                  libero iusto nobis quisquam cumque ab.
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Data-Driven Influence
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  We don’t just match you with influencers — we analyze
                  engagement, audience fit, and performance metrics to ensure
                  every partnership drives ROI.
                </p>
                <p className="text-gray-600 text-lg">
                  Monitor real-time performance and adjust your strategy
                  effortlessly with our built-in analytics dashboard.
                </p>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore nisi deleniti dicta, totam quis quod nulla. Officia
                  repellendus aliquam laudantium, provident harum doloribus sunt
                  libero iusto nobis quisquam cumque ab.
                </p>
              </div>

              <div className="relative order-1 md:order-2">
                <img
                  src="https://st2.depositphotos.com/2931363/6650/i/950/depositphotos_66507735-stock-photo-african-woman-typing-message.jpg"
                  alt="Analytics and strategy"
                  className="w-3/4 rounded-3xl shadow-2xl rotate-3 ml-auto"
                />
                <img
                  src="https://t3.ftcdn.net/jpg/03/61/53/70/360_F_361537067_d1DKRmIKOUCejfWk5Fk6UOncIAHeYm61.jpg"
                  alt="Team strategy"
                  className="absolute -top-10 -left-10 w-1/2 rounded-3xl shadow-xl -rotate-2"
                />
              </div>
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

export default InfluencerMarketing;
