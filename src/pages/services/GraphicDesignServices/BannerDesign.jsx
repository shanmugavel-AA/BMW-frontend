import React ,{useRef, useState, useEffect, useMemo} from "react";
import SEO from "../../../ReuseComponents/SEO";
import FadeOnScroll from "../../../ReuseComponents/FadeOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientCarousel from "../../../ReuseComponents/ClientsCarousel";
import CaseStudies from "../../../ReuseComponents/CaseStudies";

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

const countersData = useMemo(() => [
  { id: 1, label: "Projects Completed", target: 1200 },
  { id: 2, label: "Happy Clients", target: 875 },
  { id: 3, label: "Awards Won", target: 15 },
  { id: 4, label: "Years of Experience", target: 10 },
], []); // empty dependency array to memoize once on mount



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

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left Images */}
        <div className="flex justify-center items-center">
          <FadeOnScroll>
            <div className="grid grid-cols-2 gap-4 -rotate-15">
              <img
                src="https://i1.wp.com/fribly.com/wp-content/uploads/2019/02/Free-Vertical-Website-Presentation-Mockup.jpg?resize=820%2C4531&ssl=1"
                alt="Service 1"
                className="w-[30vh] h-[40vh] object-cover"
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/09553022575373.56314f882671b.jpg"
                alt="Service 2"
                className="w-full h-[40vh] object-cover"
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/be6aaa78397139.5cacc3bd0964c.jpg"
                alt="Service 3"
                className="w-full h-[40vh] object-cover"
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/be6aaa78397139.5cacc3bd0964c.jpg"
                alt="Service 4"
                className="w-full h-[40vh] object-cover"
              />
            </div>
          </FadeOnScroll>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Boost Your <span className="text-accent">Business Growth</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            We provide expert digital solutions to scale your brand online. From
            SEO and content marketing to social media campaigns, we help you
            grow faster with proven strategies.
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non harum
            nihil error illo? Reprehenderit ex facilis impedit consequatur!
            Dicta sed, suscipit nulla repellat nihil doloremque similique
            perferendis! Id similique minus consectetur necessitatibus, aperiam
            quidem deleniti, inventore at cupiditate est repudiandae!
          </p>
          <button className="bg-accent text-white px-6 py-3 rounded-lg w-max hover:bg-secondary transition">
            Call Us
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Explore Our <span className="text-accent">Projects</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          We craft modern solutions with creativity and innovation. Browse our
          portfolio to see the work we’ve done across industries.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vero minima. Minima omnis reprehenderit sunt eius facilis nisi blanditiis aliquam.
        </p>
      </div>

      {/* Right Vertical Auto-Swiper */}
      <div className="w-full h-[70vh]">
        <Swiper
          modules={[Autoplay]}
          direction="vertical"          // vertical scrolling
          slidesPerView={1}            // 1 slide = 2 images
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          allowTouchMove={false}
          className="h-full"
        >
          {slides.map((pair, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-4">
                {pair.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Slide ${index * 2 + i + 1}`}
                    className="w-full h-[70vh] object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default BannerDesign;
