import React, { useRef, useState, useEffect, useMemo } from "react";
import SEO from "../../../ReuseComponents/SEO";
import FadeOnScroll from "../../../ReuseComponents/FadeOnScroll";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import { FaBullseye, FaUsers, FaChartLine, FaCommentDots } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://picsum.photos/id/1015/400/600",
  "https://picsum.photos/id/1016/400/600",
  "https://picsum.photos/id/1018/400/600",
  "https://picsum.photos/id/1020/400/600",
  "https://picsum.photos/id/1021/400/600",
];

const BannerDesign = () => {
  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // const contentRef = useRef(null);
  // const [height, setHeight] = useState(0);

  // // Adjust height for smooth transition
  // useEffect(() => {
  //   if (contentRef.current) {
  //     setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  //   }
  // }, [isOpen]);

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

  function ArrowRight() {
    return (
      <div className="hidden lg:flex items-center justify-center px-4">
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  }

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
      {/* about */}
      <section className="max-w-5xl mx-auto px-4 py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Our Brand Strategy</h2>
          <p className="text-lg text-gray-700">
            We craft bespoke brand strategies that elevate your business, build
            lasting brand equity, and foster authentic connections with your
            audience. Our approach combines deep market research, compelling
            positioning, and a clear growth roadmap to ensure your brand stands
            out in a competitive landscape.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Brand Strategy"
              className="w-full rounded shadow-lg"
            />
          </div>
          <FadeOnScroll>
            <div className="flex-1 bg-white shadow-md p-6 -ml-30">
              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Our Strategy?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Data-driven insights to target the right audience.</li>
                <li>Unique positioning to differentiate your brand.</li>
                <li>Actionable growth roadmap aligned with your vision.</li>
                <li>Long-term brand building for sustained success.</li>
              </ul>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      {/* services */}
      <section className="max-w-7xl mx-auto space-y-20 mt-10 px-4 sm:px-8 lg:px-16 my-16">
        {/* First pair */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Heading + Toggle */}
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold">
                  Brand Strategy & Consultation
                </h2>
                <button
                  className="text-2xl font-bold"
                  onClick={() => setIsOpen((v) => !v)}
                >
                  {isOpen ? "×" : "+"}
                </button>
              </div>

              <div className="mt-4">
                <p className="text-md text-gray-700 text-center max-w-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  velit aperiam consequatur? Temporibus quaerat sunt enim esse
                  fugit nam? Quia molestias officia itaque accusantium
                  voluptates voluptate harum dolorum libero quas eius, saepe
                  accusamus sed iure magni maiores quos exercitationem corrupti!
                </p>
              </div>
            </div>

            {/* Content (drops below heading) */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-100 p-6 rounded shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Market Research</h3>
                <p>
                  We dive deep into your industry, competitors, and audience
                  behavior to understand where your brand stands.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Brand Positioning
                </h3>
                <p>
                  We help you carve out a distinct space in the market by
                  defining your value proposition and messaging.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Growth Roadmap
                </h3>
                <p>
                  We develop a strategic action plan that outlines how your
                  brand can evolve and expand. This foundational step ensures
                  your branding efforts are rooted in strategy, not guesswork.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="max-w-2xl flex-shrink-0">
            <img
              src="https://assets-global.website-files.com/622217140a9cad5092ea9b25/63a59076533d3181e8be47cd_branding-agency-portfolio.webp"
              alt="Brand strategy visual"
              className="w-full h-[50vh] rounded shadow object-cover"
            />
          </div>
        </div>

        {/* Second pair */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Heading + Toggle */}
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold">
                  Brand Strategy & Consultation
                </h2>
                <button
                  className="text-2xl font-bold"
                  onClick={() => setIsOpen2((v) => !v)}
                >
                  {isOpen2 ? "×" : "+"}
                </button>
              </div>

              <div className="mt-4">
                <p className="text-md text-gray-700 text-center max-w-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  velit aperiam consequatur? Temporibus quaerat sunt enim esse
                  fugit nam? Quia molestias officia itaque accusantium
                  voluptates voluptate harum dolorum libero quas eius, saepe
                  accusamus sed iure magni maiores quos exercitationem corrupti!
                </p>
              </div>
            </div>

            {/* Content (drops below heading) */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen2
                  ? "max-h-[1000px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-100 p-6 rounded shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Market Research</h3>
                <p>
                  We dive deep into your industry, competitors, and audience
                  behavior to understand where your brand stands.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Brand Positioning
                </h3>
                <p>
                  We help you carve out a distinct space in the market by
                  defining your value proposition and messaging.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Growth Roadmap
                </h3>
                <p>
                  We develop a strategic action plan that outlines how your
                  brand can evolve and expand. This foundational step ensures
                  your branding efforts are rooted in strategy, not guesswork.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="max-w-2xl w-full">
            <img
              src="https://assets-global.website-files.com/622217140a9cad5092ea9b25/63a59076533d3181e8be47cd_branding-agency-portfolio.webp"
              alt="Brand strategy visual"
              className="w-full h-[50vh] rounded shadow object-cover"
            />
          </div>
        </div>

        {/* Third pair */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Heading + Toggle */}
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold">
                  Brand Strategy & Consultation
                </h2>
                <button
                  className="text-2xl font-bold"
                  onClick={() => setIsOpen3((v) => !v)}
                >
                  {isOpen3 ? "×" : "+"}
                </button>
              </div>

              <div className="mt-4">
                <p className="text-md text-gray-700 text-center max-w-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                  velit aperiam consequatur? Temporibus quaerat sunt enim esse
                  fugit nam? Quia molestias officia itaque accusantium
                  voluptates voluptate harum dolorum libero quas eius, saepe
                  accusamus sed iure magni maiores quos exercitationem corrupti!
                </p>
              </div>
            </div>

            {/* Content (drops below heading) */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen3
                  ? "max-h-[1000px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-100 p-6 rounded shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Market Research</h3>
                <p>
                  We dive deep into your industry, competitors, and audience
                  behavior to understand where your brand stands.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Brand Positioning
                </h3>
                <p>
                  We help you carve out a distinct space in the market by
                  defining your value proposition and messaging.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  Growth Roadmap
                </h3>
                <p>
                  We develop a strategic action plan that outlines how your
                  brand can evolve and expand. This foundational step ensures
                  your branding efforts are rooted in strategy, not guesswork.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="max-w-2xl w-full">
            <img
              src="https://assets-global.website-files.com/622217140a9cad5092ea9b25/63a59076533d3181e8be47cd_branding-agency-portfolio.webp"
              alt="Brand strategy visual"
              className="w-full h-[50vh] rounded shadow object-cover"
            />
          </div>
        </div>
      </section>
      {/* process */}
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-accent">Brand Strategy</span> Process
        </h2>

        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">1.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Market Research</h3>
                <p className="text-gray-700 text-sm">
                  Deep dive into industry trends, competitor analysis, and
                  customer insights.
                </p>
              </div>
              {/* Arrow line underneath */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022" // Tailwind indigo-500
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead as small triangle */}
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">2.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
                <p className="text-gray-700 text-sm">
                  Define value proposition and messaging to stand out.
                </p>
              </div>
              {/* Arrow line underneath */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">3.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Growth Roadmap</h3>
                <p className="text-gray-700 text-sm">
                  Create strategic plans for your brand’s future expansion.
                </p>
              </div>
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">4.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Market Research</h3>
                <p className="text-gray-700 text-sm">
                  Deep dive into industry trends, competitor analysis, and
                  customer insights.
                </p>
              </div>
              {/* Arrow line underneath */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022" // Tailwind indigo-500
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead as small triangle */}
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">5.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
                <p className="text-gray-700 text-sm">
                  Define value proposition and messaging to stand out.
                </p>
              </div>
              {/* Arrow line underneath */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-gray-700 mb-2">6.</div>
            <div className="relative px-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                <h3 className="text-xl font-bold mb-2">Growth Roadmap</h3>
                <p className="text-gray-700 text-sm">
                  Create strategic plans for your brand’s future expansion.
                  Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
                </p>
              </div>
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 100 4"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#e30022"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <polygon points="100,2 95,0 95,4" fill="#e30022" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* benifits */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column with centered circular image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
  {/* Center circular image */}
  <div className="rounded-full overflow-hidden w-48 h-48 shadow-lg z-10">
    <img
      src="https://m.media-amazon.com/images/G/31/Amazon-Global-Selling-IN/what_is_global_branding.jpg"
      alt="Central Brand Image"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Benefits around the image */}
  {/* Top Center */}
  <div className="absolute -top-3 left-95 transform -translate-x-1/2 -translate-y-1/2 p-3 w-44 text-center">
    <FaBullseye className="mx-auto text-accent text-3xl mb-2" />
    <span className="font-semibold">Increased Recognition</span>
  </div>

  {/* Left Center */}
  <div className="absolute top-35 left-90 transform -translate-y-1/2 -translate-x-full p-3 w-44 text-center">
    <FaUsers className="mx-auto text-accent text-3xl mb-2" />
    <span className="font-semibold">Customer Loyalty</span>
  </div>

  {/* Bottom Center */}
  <div className="absolute -bottom-5 left-95 transform translate-x-[-50%] translate-y-1/2 p-3 w-44 text-center">
    <FaChartLine className="mx-auto text-accent text-3xl mb-2" />
    <span className="font-semibold">Competitive Edge</span>
  </div>

  {/* Right Center */}
  <div className="absolute top-40 right-45 transform translate-y-[-50%] translate-x-1/2 p-3 w-44 text-center">
    <FaCommentDots className="mx-auto text-accent text-3xl mb-2" />
    <span className="font-semibold">Consistent Messaging</span>
  </div>
</div>


        {/* Right Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Why Brand Strategy Matters</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A well-defined brand strategy drives your business growth by building recognition, fostering loyalty, and giving you an edge in competitive markets. It ensures consistent messaging across channels and creates lasting emotional connections with your audience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            By placing your brand at the center of your business, you can create a compelling story that resonates with customers and supports long-term success.
          </p>
        </div>

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

export default BannerDesign;
