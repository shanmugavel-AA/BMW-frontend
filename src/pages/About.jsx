// src/pages/AboutUs.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered fade-up
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Subtle 3D rotation on scroll
    gsap.to(imageRef.current, {
      rotateY: 15,
      rotateX: 5,
      duration: 2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
      >
        About Us
      </motion.h1>

      <div
        ref={sectionRef}
        className="max-w-5xl grid md:grid-cols-2 gap-10 items-center text-accent"
      >
        {/* Text Section */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            Founded in 2012, we are one of India’s leading digital marketing
            solution providers, enabling brands to accelerate growth through
            innovative strategies. Our team manages over ₹300 crores in digital
            media buying across Google, Meta, LinkedIn, Amazon, and other
            platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            Our expertise spans performance marketing, video marketing,
            influencer collaborations, and cutting-edge programmatic advertising
            — delivering measurable results for brands in diverse industries.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We focus on delivering ROI-driven campaigns backed by data insights
            and creative excellence, ensuring every ad spend maximizes business
            impact.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/about-3d.png"
            alt="Digital Media Buying"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
