import React, { useRef, useLayoutEffect,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScrollSMM from "../../../ReuseComponents/HorizontalScrollSMM";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import Blogs from "../../../ReuseComponents/Blogs";
import SEO from "../../../ReuseComponents/SEO";

gsap.registerPlugin(ScrollTrigger);


const serviceData = [
  {
    id: "technical",
    label: "Technical Auditing",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#000000ff" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#000000ff" strokeWidth="2" />
      </svg>
    ),
    title: "Technical Auditing",
    heading:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia",
    description:
      "We deeply analyze your website’s technical SEO — identifying crawl issues, indexation problems, and speed optimization opportunities. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia magnam iure quia ipsa pariatur ab corporis perspiciatis obcaecati architecto expedita fugiat.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "keyword",
    label: "Keyword Research",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" stroke="#000000ff" strokeWidth="2" />
        <path d="M21 21l-5.2-5.2" stroke="#000000ff" strokeWidth="2" />
      </svg>
    ),
    title: "Keyword Research",
    heading:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia",
    description:
      "Find high-value search terms for your niche to maximize visibility and ROI. Keyword mapping tailored to your industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia magnam iure quia ipsa pariatur ab corporis perspiciatis obcaecati architecto expedita fugiat.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "content",
    label: "Content Creation",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#000000ff" strokeWidth="2" />
        <path d="M8 8h8M8 12h5" stroke="#000000ff" strokeWidth="2" />
      </svg>
    ),
    title: "Content Creation",
    heading:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia",
    description:
      "Compelling blog posts, landing pages, and graphics designed to boost rankings and conversions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia magnam iure quia ipsa pariatur ab corporis perspiciatis obcaecati architecto expedita fugiat.",
    image:
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "link",
    label: "Link Building",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M8 12a4 4 0 0 1 4-4h4M16 12a4 4 0 0 1-4 4H8" stroke="#000000ff" strokeWidth="2" />
      </svg>
    ),
    title: "Link Building",
    heading:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia",
    description:
      "Safe, outreach-driven strategies bring you quality backlinks from relevant, authoritative websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia magnam iure quia ipsa pariatur ab corporis perspiciatis obcaecati architecto expedita fugiat.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "reporting",
    label: "Transparent Reporting",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#000000ff" strokeWidth="2" />
        <path d="M8 16V12M12 16V8M16 16v-4" stroke="#000000ff" strokeWidth="2" />
      </svg>
    ),
    title: "Transparent Reporting",
    heading:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia",
    description:
      "Receive clear, actionable reports every month, showing all your progress and KPIs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate amet exercitationem, porro sapiente eius vitae est officia magnam iure quia ipsa pariatur ab corporis perspiciatis obcaecati architecto expedita fugiat.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=500&q=80",
  },
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


const SocialMedia = () => {
  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [activeId, setActiveId] = useState(serviceData[0].id);
  const [activeIndex, setActiveIndex] = useState(null);

  const active = serviceData.find((s) => s.id === activeId);

  // GSAP batch animations & parallax images setup in useLayoutEffect for proper timing
  useLayoutEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
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

      // Parallax images
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

      // Rendering optimization
      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(".parallax-image", { willChange: "transform" });
      });
    });

    return () => ctx.revert();
  }, []);

  // Hero and Details animations
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

  return (
    <div className="font-sans bg-[#222] text-gray-900">
      <SEO
        title="About Me | Shanmugavel Portfolio"
        description="Learn about Shanmugavel A, Frontend Developer and React expert."
        image="https://www.yourdomain.com/images/static-about.jpg" // static image
        canonicalUrl="https://www.brandandmediaworks.com/about"
      />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80')",
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

      {/* Details Section */}
      <section
        id="details"
        className="relative z-10 h-[100vh] flex flex-col items-center justify-start px-6 pt-20 rounded-t-[60px] max-w-screen-2xl mx-auto bg-white"
        aria-label="Service Details"

      >
        {/* Title + Subtext */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-4">
          Title or Motto
        </h2>
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A short
          tagline here that looks sleek & professional.
        </p>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/637/783/non_2x/smm-social-media-marketing-vector.jpg"
              alt="Social Media Marketing"
              className="w-100 h-100 object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-justify -mt-8 md:-mt-0">
            <p className="text-gray-700 leading-relaxed text-lg">
              Quasi repellendus eaque accusantium! Eligendi reiciendis similique
              totam mollitia error dolore, commodi placeat, reprehenderit optio
              cupiditate? Distinctio perferendis alias adipisci laudantium.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              quasi. Accusamus impedit quaerat doloremque quibusdam consectetur
              debitis rem ipsum? Asperiores doloribus aperiam ea placeat,
              excepturi et inventore porro corporis itaque.
            </p>

            {/* CTA Button */}
            <div className="mb-6 mt-4 md:mb-0 md:mt-6">
              <button className="px-8 py-3 text-black font-semibold border-2 hover:bg-accent transition-all duration-300">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 flex items-center justify-center bg-white -mt-2 md:-mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div
            className="md:col-span-2 flex flex-col justify-center h-full text-left"
            ref={leftRef}
          >
            <h2 className="text-3xl font-bold mb-6">Grow Your Brand with Us</h2>
            <p className="text-gray-600 mb-6 max-w-xl">
              We help you stand out in the digital space with powerful
              strategies, creative content, and data-driven marketing solutions.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea
              vitae aliquam similique itaque architecto molestias? Modi aperiam,
              quibusdam aliquid ducimus pariatur reprehenderit. Culpa laudantium
              aliquid, pariatur ad illum quo?
            </p>
          </div>

          {/* Right Image with Wave */}
          <div className="md:col-span-1 flex justify-center items-center relative -mb-2" ref={rightRef}>
            {/* White background shape */}
            <div className="absolute top-0 left-6 md:top-0 md:left-0 w-80 h-96 bg-gray-300 -translate-x-6 -translate-y-6"></div>

            {/* Main image */}
            <div className="w-80 h-96 overflow-hidden relative z-10">
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/427/366/non_2x/smm-letter-logo-design-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg"
                alt="Marketing Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-14 px-4 fade-left">
            <h2 className="text-4xl font-bold text-center text-[#14213d] mb-4 tracking-tight tracking-wider">
              Why Every Brand Needs Social Media
            </h2>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Build and grow your brand with a strategic digital footprint.
              Here’s what sets leading brands apart online.
            </p>
          </div>

          {/* Row 1: Image left, Content right with icon */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch md:h-72 mb-6">
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
                alt="Marketing Foundation"
                className="w-100 h-100 object-cover shadow"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-8 mt-10 md:mt-0 fade-right">
              {/* Example Megaphone Icon */}
              <span className="mb-4 inline-block">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 10V7a1 1 0 0 1 1-1h2v10H4a1 1 0 0 1-1-1v-3m2-6v10M8 8h11l2-3v14l-2-3H8V8z"
                    stroke="#14213d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-[#14213d] mb-2">
                Marketing Foundation
              </h3>
              <p className="text-gray-600 text-lg">
                Social media is a solid foundation for modern marketing,
                enabling you to reach and engage your ideal audience in creative
                ways.
              </p>
            </div>
          </div>

          {/* Row 2: Image right, Content left with icon */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch md:h-72 mb-6">
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=500&q=80"
                alt="Customer Validation"
                className="w-100 h-100 object-cover shadow"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-8 mt-10 md:mt-0 fade-left">
              {/* Example User Icon */}
              <span className="mb-4 inline-block">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="#14213d"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"
                    stroke="#14213d"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-[#14213d] mb-2">
                Customer Validation
              </h3>
              <p className="text-gray-600 text-lg">
                Customers evaluate your brand through your digital presence.
                Authentic, consistent engagement builds trust and credibility.
              </p>
            </div>
          </div>

          {/* Row 3: Image left, Content right with icon */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch md:h-72">
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80"
                alt="Competitive Edge"
                className="w-100 h-100 object-cover shadow"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-8 mt-10 md:mt-0 fade-right">
              {/* Example Podium Icon */}
              <span className="mb-4 inline-block">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="13"
                    width="4"
                    height="8"
                    stroke="#14213d"
                    strokeWidth="2"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="6"
                    height="12"
                    stroke="#14213d"
                    strokeWidth="2"
                  />
                  <rect
                    x="17"
                    y="17"
                    width="4"
                    height="4"
                    stroke="#14213d"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-[#14213d] mb-2">
                Competitive Edge
              </h3>
              <p className="text-gray-600 text-lg">
                Consistent, engaging social presence helps you outperform
                competitors and build lasting loyalty.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="border-2 border-[#14213d] text-[#14213d] font-semibold px-8 py-3 transition-colors duration-200 hover:bg-accent hover:text-white hover:shadow-lg"
            type="button"
          >
            Get in touch
          </button>
        </div>
      </section>

      <HorizontalScrollSMM />

      <CaseStudies />

      {/* Our Social Media Marketing Services */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-white">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 fade-left">
          <h2 className="text-3xl text-gray-900 mb-4 text-left tracking-wider">
            Our Creative{" "}
            <span className="text-accent font-semiBold">Services</span>
          </h2>
        </div>

        {/* Single column block */}
        <div className="max-w-3xl mx-auto mb-12 fade-right">
          <h3 className="text-2xl font-bold mb-2 text-left tracking-wider">Strategic Planning</h3>
          <p className="text-left text-sm text-gray-700">
            We help define strategic goals to maximize impact and growth for
            your business.
          </p>
        </div>

        {/* Horizontal container */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 max-w-7xl mx-auto overflow-visible">
          <div className="w-full md:w-[600px] flex-shrink-0 fade-left">
            <h3 className="text-2xl font-bold mb-2 text-left tracking-wider">Creative Design</h3>
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
            <h3 className="text-2xl font-bold mb-2 tracking-wider">Digital Marketing</h3>
            <p className="text-sm">
              Implementing data-driven marketing campaigns that deliver measurable results.
            </p>
          </div>
        </div>

        {/* Image + content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-[400px] mt-6 md:mt-0">
          <div className="w-full md:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Sharp"
              className="h-64 md:h-full w-full object-cover parallax-image"
            />
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center px-6 md:px-8 fade-right mt-6 md:mt-0">
            <div className="max-w-sm w-full">
              <h3 className="text-2xl font-bold mb-4 text-left tracking-wider">Innovative Solutions</h3>
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
            <h3 className="text-2xl font-bold mb-4 text-left tracking-wider">Collaborative Approach</h3>
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
              className="h-64 md:h-[550px] w-full md:w-[80%] object-cover md:absolute md:top-[-120px] parallax-image"
              style={{ left: "-40px", zIndex: 10 }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white -mb-2">
        <div className="text-center">
          <h2 className="text-4xl mb-10 font-bold">Why Choose Brand and media works<br />
             for Social Media Marketing in Chennai?</h2>
        </div>
      {/* Tabs/Icons */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {serviceData.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveId(service.id)}
            className={`flex flex-col items-center px-4 py-2 transition-all duration-200 border-b-4 ${
              activeId === service.id
                ? "border-accent text-gray-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-accent"
            }`}
            style={{ minWidth: 120 }}
            aria-current={activeId === service.id}
          >
            <span>{service.icon}</span>
            <span className="mt-1 text-sm md:text-base">{service.label}</span>
          </button>
        ))}
      </div>

      {/* Two-column active content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-2xl shadow-md transition-all duration-300 items-center">
        {/* Left: Text/Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-accent tracking-wider">{active.title}</h2>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-black tracking-wider">{active.heading}</h2>
          <p className="text-base text-gray-600 mb-6">{active.description}</p>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <img
            src={active.image}
            alt={active.title}
            className="object-cover w-full h-52 md:h-64 rounded-xl shadow"
          />
        </div>
      </div>
    </section>

    {/* blogs */}
    <Blogs category="smm"/>

    <section className="relative flex flex-col items-center justify-center text-center -mt-2 mb-20 px-4 sm:px-6 bg-white">
  {/* Content */}
  <div className="relative z-10">
    <div className="border-accent border-2"></div>
    <h1 className="text-4xl sm:text-6xl md:text-8xl text-gray-300 font-extrabold tracking-widest">
      QUESTIONS
    </h1>
    <div className="text-lg sm:text-xl md:text-2xl text-secondary font-bold relative -mt-8 sm:-mt-12 md:-mt-16">
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
        {activeIndex === i && (
 <div className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
{faq.a}
 </div>
)}

      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default SocialMedia;
