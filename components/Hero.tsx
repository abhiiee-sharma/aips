"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/images/aips-hero1.jpeg", // Replace with your image paths
  "/images/aips-hero2.jpeg",
  "/images/aips-hero3.jpeg",
];

export default function HeroSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000); // Changes every 10 seconds
    return () => clearInterval(timer);
  }, []);

  const handleJoinUs = () => {
    router.push("/registration");
  };

  const handleDonateBtn = () => {
    router.push("/donate");
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
        
        {/* Carousel Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Police Sahyog Hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#F1C40F] mb-10 drop-shadow-md"
          >
            Honoring valor, supporting families
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            {/* Join Us Button */}
            <button
              onClick={handleJoinUs}
              className="flex-1 bg-[#F1C40F] hover:bg-[#D4AC0D] text-[#003366] font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Join Us
            </button>

            {/* Donate Button */}
            <button
              onClick={handleDonateBtn}
              className="flex-1 bg-[#003366] hover:bg-[#002244] text-white font-bold py-3 px-8 rounded-lg border border-[#004080] transition-colors text-lg"
            >
              Donate
            </button>
          </div>
        </div>

        {/* Carousel Indicators (Optional) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-[#F1C40F] w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}