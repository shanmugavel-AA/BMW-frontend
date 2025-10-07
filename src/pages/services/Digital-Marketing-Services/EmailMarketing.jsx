import SEO from "../../../ReuseComponents/SEO";
import React, { useEffect, useRef, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollStack, {
  ScrollStackItem,
} from "../../../ReuseComponents/ScrollStackItems";
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

const EmailMarketing = () => {
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
      <section className="max-w-7xl mx-auto bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
      {/* Left: Content */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="max-w-xl mx-auto lg:mx-0">
          <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
            Grow revenue with targeted email campaigns
          </h3>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Convert visitors to loyal customers with personalized sequences, attention-grabbing subject lines, and measurable A/B tests — built to scale.
          </p>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, voluptatem possimus praesentium hic dicta architecto, vero nam rerum dolorem laudantium esse, mollitia voluptas ipsa nesciunt temporibus cumque dolorum? Asperiores, dolore.
          </p>

          {/* Small email capture (visual only) */}
          <form className="mt-8 w-full max-w-lg bg-gray-50 rounded-xl p-3 shadow-sm mx-auto lg:mx-0">
            <label className="sr-only">Email</label>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-800 w-full"
              />
              <button className="px-4 py-2 rounded-lg bg-accent text-white font-medium w-full sm:w-auto">
                Start free
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right: Image with negative margins and decorative shape */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="relative w-full flex justify-center lg:justify-end">
          {/* Decorative blob */}
          <div
            className="absolute -left-8 -top-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-60 blur-3xl transform rotate-12 pointer-events-none"
            aria-hidden
          ></div>

          <div className="relative w-[280px] sm:w-[360px] md:w-[480px] lg:w-[520px] shadow-2xl rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="Email marketing dashboard on multiple devices"
              className="w-full h-full object-cover block"
            />

            {/* Overlapping card */}
            <div className="absolute left-4 top-14 sm:top-16 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md -translate-y-6">
              <p className="text-sm font-semibold text-gray-800">Open rate +32%</p>
              <p className="text-xs text-gray-500">From recent campaign</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom decorative CTA bar */}
    <div className="md:-mb-6 lg:mt-0 mt-16">
      <div className="max-w-4xl mx-auto rounded-xl bg-red-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 -translate-y-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-700">Want help launching your first drip campaign?</p>
          <p className="text-xs text-gray-500">Free 30-minute strategy call</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-medium"
          >
            Schedule call
          </a>
        </div>
      </div>
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

          {/* scroll stack  */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Email Marketing Process
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              A data-driven approach that blends creativity, automation, and
              strategy to maximize engagement and ROI.
            </p>
          </div>
        </div>
        <ScrollStack useWindowScroll={true}>
          {/* Card 1 */}
          <ScrollStackItem itemClassName="bg-primary border-4 border-accent text-gray-700 h-80 overflow-hidden rounded-[40px]">
            <div className="flex flex-col md:flex-row items-center h-full ml-4">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center h-full p-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Strategy
                </h2>
                <p className="text-base md:text-lg">
                  Plan your email campaign, define your target audience, and set
                  goals. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Corrupti quia iure iste, possimus quaerat aperiam cumque
                  distinctio esse quam mollitia. Dolores ullam minus nam aut
                  inventore repudiandae, maxime alias! Repudiandae.
                </p>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center h-full overflow-hidden">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.FsoIz6LKeREpVYhWjbU1RgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Strategy"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 2 */}
          <ScrollStackItem itemClassName="bg-primary border-4 border-accent text-gray-700 h-80 overflow-hidden rounded-[40px]">
            <div className="flex flex-col md:flex-row items-center h-full ml-4">
              <div className="flex-1 flex flex-col justify-center h-full p-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Design</h2>
                <p className="text-base md:text-lg">
                  Create engaging email templates and visuals to capture
                  attention. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Incidunt laboriosam alias praesentium consequuntur
                  voluptas blanditiis fugiat asperiores quae non, enim iusto
                  molestiae numquam aliquid itaque porro, mollitia labore eius
                  nihil?
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center h-full overflow-hidden">
                <img
                  src="https://cdn.shopify.com/s/files/1/0070/7032/files/Email_Marketing_Examples_Independent_Brands.jpg?v=1646670549"
                  alt="Design"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 3 */}
          <ScrollStackItem itemClassName="bg-primary border-4 border-accent text-gray-700 h-80 overflow-hidden rounded-[40px]">
            <div className="flex flex-col md:flex-row items-center h-full ml-4">
              <div className="flex-1 flex flex-col justify-center h-full p-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Launch</h2>
                <p className="text-base md:text-lg">
                  Schedule and send emails to your audience at the right time.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt laboriosam alias praesentium consequuntur voluptas
                  blanditiis fugiat asperiores quae non, enim iusto molestiae
                  numquam aliquid itaque porro, mollitia labore eius nihil?
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center h-full overflow-hidden">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.CY_dSoyGQBYEt1U4WJvv6AHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Design"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
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

export default EmailMarketing;
