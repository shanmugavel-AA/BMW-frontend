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

const ContentMarketing = () => {
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

      <section className="max-w-7xl mx-auto min-h-screen px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <div>
            <img
              src="https://picsum.photos/400/400"
              alt="Left Image"
              className="w-[50vh] h-[80vh] object-cover -mt-35"
            />
            <div className="w-[50vh] text-lg">
              <h2 className="text-3xl font-bold mt-4">heading</h2>
              <p className="text-lg text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                laborum ex similique eos debitis tenetur numquam corporis cum
                fugit nihil veritatis exercitationem ut excepturi cumque
                placeat. Vitae excepturi nemo blanditiis! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Alias neque ut ea maiores
                eos officia et dolore qui impedit accusantium!
              </p>
            </div>
          </div>
        </div>

        {/* Center Column - Vertical Image */}
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/300/600"
            alt="Center Vertical Image"
            className="h-[80vh] w-[60vh] object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center ml-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Right Column Title
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            volutpat sapien. Vivamus eget dui in augue sagittis vulputate.
            Curabitur vehicula risus vitae sapien cursus, in tempor purus
            tincidunt.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Additional description or call to action can go here.
          </p>
        </div>
      </section>

      <section>
        {/* Top section with centered rectangle image, absolutely positioned to overlap */}
        <FadeOnScroll>
          <div className="bg-secondary h-[60vh] relative">
            <h2 className="absolute left-20 md:left-80 top-10 md:top-20 font-bold text-white text-3xl md:text-6xl">
              Lorem ipsum
            </h2>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.WxZ34a-WikHzbkHVhIS7BAHaD5?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Rectangle"
              className="absolute right-4 md:left-40 top-[100px] md:top-[200px] w-[280px] md:w-[800px] h-[175px] md:h-[400px] object-cover z-10 border-4 border-white"
            />
          </div>
        </FadeOnScroll>
        {/* Bottom section with right-aligned vertical rectangle, absolutely positioned to overlap upward */}
        <FadeOnScroll>
          <div className="h-[80vh] md:h-[70vh] relative">
            <img
              src="https://graphicex.com/uploads/posts/2016-12/1482390980_Bz1xL7x.jpg"
              alt="Vertical Rectangle"
              className="md:block hidden absolute right-4 md:right-[100px] bottom-[40px] md:-top-100 w-[150px] md:w-[400px] h-[190px] md:h-[500px] object-cover z-20 border-4 border-white"
            />
            <div className="absolute right-4 md:right-40 -top-30 w-[90vw] md:w-[70vh] bg-primary z-30 p-4 md:p-6 text-left">
              <h2 className="text-xl md:text-3xl font-bold text-secondary">
                lorem
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate aliquid natus quisquam quod suscipit reprehenderit
                ipsam non omnis assumenda nostrum rerum, praesentium accusamus
                rem quia quos sequi dolorum aut facilis quidem voluptatem
                itaque, pariatur facere, ipsum ut? Praesentium, hic ipsum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi
                deserunt aliquam earum cum? Ipsam ut voluptates modi enim
                repellendus blanditiis numquam eum, unde, quasi at iusto.
                Voluptatibus, rem ex!
              </p>

              <p className="text-secondary mt-4 text-base md:text-lg">
                Want to know more details?
              </p>
              <button className="mt-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300">
                Call Us
              </button>
            </div>

            <div className="absolute bottom-0 md:bottom-22 left-4 md:left-80 w-[90vw] md:w-[50vh]">
              <div className="mx-auto w-14 border-2 border-accent mb-2"></div>
              <p className="md:block hidden text-base md:text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                eos nulla veritatis alias minima placeat nemo. Ipsam, reiciendis
                officiis perspiciatis nisi totam libero rem maxime amet enim
                autem quasi sint saepe architecto dolorum voluptate sed
                reprehenderit et magnam unde accusamus? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Temporibus, voluptas.
              </p>
              <p className="md:hidden block text-base md:text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                eos nulla veritatis alias minima placeat nemo. Ipsam, reiciendis
              </p>
            </div>
          </div>
        </FadeOnScroll>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-8 auto-rows-min">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-7 row-span-1 flex flex-col justify-center">
          <img
            src="https://i1.wp.com/www.designlike.com/wp-content/uploads/2017/11/table-2587226_1920.jpg"
            alt=""
            className="h-[50vh] w-[100vh]"
          />
        </div>

        {/* Our Services */}
        <div className="col-span-12 md:col-span-5 bg-white p-8 w-[50vh]">
  <h2 className="font-semibold text-4xl mb-5">Our Services</h2>
  <ul className="list-none space-y-3 text-gray-700 text-xl pl-6">
  <li className="flex items-start gap-2">
    <svg className="text-accent flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.285 6.709l-11.39 11.39-5.18-5.18 1.41-1.41 3.77 3.77 9.98-9.98 1.41 1.41z"/>
    </svg>
    Content Strategy & Planning
  </li>
  <li className="flex items-start gap-2">
    <svg className="text-red-600 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.285 6.709l-11.39 11.39-5.18-5.18 1.41-1.41 3.77 3.77 9.98-9.98 1.41 1.41z"/>
    </svg>
    Content Strategy & Planning
  </li>
  <li className="flex items-start gap-2">
    <svg className="text-red-600 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.285 6.709l-11.39 11.39-5.18-5.18 1.41-1.41 3.77 3.77 9.98-9.98 1.41 1.41z"/>
    </svg>
    Content Strategy & Planning
  </li>
  <li className="flex items-start gap-2">
    <svg className="text-red-600 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.285 6.709l-11.39 11.39-5.18-5.18 1.41-1.41 3.77 3.77 9.98-9.98 1.41 1.41z"/>
    </svg>
    Content Strategy & Planning
  </li>
  <li className="flex items-start gap-2">
    <svg className="text-red-600 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.285 6.709l-11.39 11.39-5.18-5.18 1.41-1.41 3.77 3.77 9.98-9.98 1.41 1.41z"/>
    </svg>
    Content Strategy & Planning
  </li>
</ul>
</div>


        {/* Process Overview */}
        <div className="col-span-12 md:col-span-12 bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-3xl mb-4">Our Process</h3>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            atque molestiae tenetur quisquam, non laudantium, numquam odit
            officia suscipit assumenda quam! Voluptatem ducimus accusamus
            cupiditate labore quibusdam dolor natus eius laboriosam, cumque
            accusantium iusto. Placeat eligendi sapiente natus, fugiat
            cupiditate explicabo quia tempora, temporibus deleniti hic dolorum
            repellat voluptatem distinctio.
          </p>
        </div>

        {/* Call to Action Banner */}
        <div className="col-span-12 bg-accent rounded-lg text-white p-10 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div>
            <h3 className="text-3xl font-bold mb-3">
              Ready to Grow Your Business with Content Marketing?
            </h3>
            <p className="max-w-xl">
              Connect with us to develop a custom strategy that delivers
              measurable business growth and brand authority.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-white text-secondary px-10 py-4 rounded font-semibold hover:bg-gray-100 transition">
            Schedule a Call
          </button>
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

export default ContentMarketing;
