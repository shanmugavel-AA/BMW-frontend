import {useRef} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

 const imageSlides = [
    "https://img.freepik.com/premium-photo/seo-word-written-from-wood-letters-magnifying-glass-black-background_134398-8490.jpg",
    "https://picsum.photos/id/1012/600/400",
    "https://thumbs.dreamstime.com/b/seo-search-engine-optimization-text-message-magnifying-glass-black-background-272636533.jpg",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
  ];
const CaseStudies = () => {
    const swiperRef = useRef(null);
  return (
    <div>
      {/* Section 2 - Work Showcase */}
      <section className="bg-white -mt-16 z-20 py-20 relative">
        <div className="container mx-auto px-0 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center md:text-left px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wider">Our Work</h2>
            <p className="mb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              We’ve helped businesses achieve measurable growth through
              cutting-edge SEO strategies, engaging content, and proven
              marketing methods. Every project is tailored to your business
              goals for long-lasting results.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition border border-gray-300 text-sm sm:text-base"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition border border-gray-300 text-sm sm:text-base"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>

          {/* Right Swiper */}
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation]}
              loop
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: false, // full width on mobile
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
              className="pb-10"
            >
              {imageSlides.map((src, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={`transition-all duration-300 ${
                        isActive
                          ? "scale-105 shadow-2xl"
                          : "scale-95 opacity-70"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Work ${index + 1}`}
                        className="rounded-lg object-cover w-full h-64 sm:h-72"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
