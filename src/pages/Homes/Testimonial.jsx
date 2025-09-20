import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    thumbnail:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    thumbnail:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1K2y3M.img?w=960&h=720&m=4&q=60',
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
];

const Testimonials = () => {
  const navigate = useNavigate();
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const openVideo = (videoUrl) => {
    setFullscreenVideo(videoUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setFullscreenVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Refs for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const testimonialRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    // ✅ Title + subtitle together
    gsap.from([titleRef.current, subtitleRef.current], {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true, // ✅ run only once
      },
    });

    // ✅ Testimonial fade-in
    gsap.from(testimonialRef.current, {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 85%",
        once: true,
      },
    });

    // ✅ Images animation using batch for better perf
    imagesRef.current.forEach((el) => {
      el.style.willChange = "transform, opacity"; // 👈 GPU hint
    });

    ScrollTrigger.batch(imagesRef.current, {
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      },
      once: true,
      start: "top 90%",
    });

    // ✅ Refresh for responsive/mobile
    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        {/* Subtitle */}
        <p ref={subtitleRef} className="text-gray-600 mb-10">
          Hear from those who have experienced our services firsthand
        </p>
        {/* Testimonials Content */}
        <div ref={testimonialRef} className="max-w-4xl mx-auto mb-10">
          <p className="text-gray-700 italic mb-3 text-justify text-lg leading-snug">
            "Working with this team transformed our digital presence. Their expertise and dedication made all the difference!"
          </p>
        </div>
        {/* Images Section */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-12 md:space-y-0 items-center mb-10">
          {videos.map(({ id, thumbnail, videoUrl }, i) => (
            <div
              key={id}
              ref={(el) => (imagesRef.current[i] = el)}
              className="relative w-full max-w-xs md:w-100 h-64 md:h-80 flex-shrink-0 overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openVideo(videoUrl)}
            >
              <img
                src={thumbnail}
                alt={`Client ${id}`}
                className="w-full h-full object-cover"
                style={{ borderRadius: 0 }}
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 md:h-16 md:w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.247v7.506a1 1 0 001.234.97l6.518-1.64a1 1 0 000-1.914z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Navigate Button */}
        <button
          onClick={() => navigate('/testimonials')}
          className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-accent transition"
        >
          View All Testimonials
        </button>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white bg-secondary rounded-full p-3 md:p-2 hover:bg-accent z-10"
              aria-label="Close video"
            >
              &#10005;
            </button>
            <iframe
              width="100%"
              height="100%"
              src={fullscreenVideo + '?autoplay=1'}
              title="Client Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
