import React, { useRef, useState, useEffect, useMemo } from "react";
import SEO from "../../../ReuseComponents/SEO";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import CaseStudies from "../../../ReuseComponents/CaseStudies";
import VerticalLogoLoop from "../../../ReuseComponents/VerticalLogoLoop";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://picsum.photos/id/1015/400/600",
  "https://picsum.photos/id/1016/400/600",
  "https://picsum.photos/id/1018/400/600",
  "https://picsum.photos/id/1020/400/600",
  "https://picsum.photos/id/1021/400/600",
];

 

const BrochureDesign = () => {
  const sectionRef = useRef(null);
  const countersRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const Navigate = useNavigate();

  const toContact = () =>{
    Navigate("/contact");
  }

  const slides = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }

  const imagesColumn1 = [
    {
      src: "https://siteimages.simplified.com/blog/Screenshot-2022-10-21-at-11.51.1-1.png?auto=compress&fm=png",
      alt: "Photo 1",
    },
    {
      src: "https://assets.visme.co/templates/banners/thumbnails/i_The-Best-Ads-Vertical_full.jpg",
      alt: "Photo 2",
    },
    {
      src: "https://img.freepik.com/premium-psd/ad-car-show-promotion-vertical-flyer-template_490702-1516.jpg",
      alt: "Photo 3",
    },
  ];

  const imagesColumn2 = [
    {
      src: "https://siteimages.simplified.com/blog/Screenshot-2022-10-21-at-11.51.1-1.png?auto=compress&fm=png",
      alt: "Photo 4",
    },
    {
      src: "https://www.sneakerreporter.com/wp-content/uploads/2017/09/vertical_ad_1.jpg",
      alt: "Photo 5",
    },
    {
      src: "https://tse1.mm.bing.net/th/id/OIP.4Z_qgE32ojddAKHhM_gDugHaKs?w=500&h=722&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Photo 6",
    },
  ];

  const imagesColumn3 = [
    {
      src: "https://tse3.mm.bing.net/th/id/OIP.ONXYjDvC_Mfzcu2ZN4RQ7gAAAA?w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Photo 7",
    },
    {
      src: "https://blog.codegrape.com/wp-content/uploads/2020/01/images-9-scaled.jpg",
      alt: "Photo 8",
    },
    {
      src: "https://tse1.mm.bing.net/th/id/OIP.YBoOMrJZGKFwnMHoqqlDhgHaM6?rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Photo 9",
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

          <div className="md:block hidden w-[100vh] p-6 bg-white shadow-md relative -ml-50 -mb-42 z-10">
  <div className="flex items-center h-full">
    {/* Left col: Title */}
    <div className="flex items-center justify-center w-32 h-full relative">
      <span className="text-lg font-extrabold text-secondary">Lorem ipsum dolor sit.</span>
      {/* Vertical line centered */}
      <div className="absolute -right-2 top-20 -translate-y-1/2 h-32 w-[2px] bg-black"></div>
    </div>
    {/* Right col: Paragraph, with padding to accommodate line */}
    <div className="pl-8">
      <p className="text-gray-600 max-w-xl">
        This is the second row content inside the center column. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ratione quisquam officiis repellendus numquam quasi ab fugit, inventore, possimus distinctio nam soluta dolore accusantium! Voluptatum, aperiam. Molestias libero numquam iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum dolor molestiae sit delectus ipsam, est praesentium deleniti quas eum accusamus necessitatibus saepe odit? Ipsum dolorum optio impedit esse facilis.
      </p>
    </div>
  </div>
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

      <section className="flex min-h-screen w-full justify-center items-center bg-white">
  {/* Group both CTA and Logo Loops in one flex row, center them together */}
  <div className="flex flex-row items-center gap-10">
    {/* Left side CTA */}
    <div className="flex-shrink-0">
      <div className="bg-red-600 text-white p-6 rounded shadow-lg max-w-xs">
  <h3 className="text-xl font-bold mb-2">Boost Your Campaign</h3>
  <p className="mb-4">
    Get started with our amazing logo loops and stand out from the crowd.
  </p>
  <button
    type="button"
    className="w-full bg-white text-red-600 font-semibold py-2 rounded hover:bg-gray-100 transition"
    onClick={toContact}
   >
    Get Started
  </button>
</div>

    </div>
    {/* Center vertical loops */}
    <div className="flex flex-row justify-center gap-6">
      <VerticalLogoLoop
        logos={imagesColumn1}
        direction="down"
        height={500}
        logoWidth={200}
        speed={100}
        gap={24}
        fadeOut={true}
        scaleOnHover={true}
      />
      <VerticalLogoLoop
        logos={imagesColumn2}
        direction="up"
        height={500}
        logoWidth={200}
        speed={100}
        gap={24}
        fadeOut={true}
        scaleOnHover={true}
      />
      <VerticalLogoLoop
        logos={imagesColumn3}
        direction="down"
        height={500}
        logoWidth={200}
        speed={100}
        gap={24}
        fadeOut={true}
        scaleOnHover={true}
      />
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

export default BrochureDesign;
