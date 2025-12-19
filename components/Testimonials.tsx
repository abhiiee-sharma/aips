"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials from Police Officers of various ranks
const NGO_MESSAGES = [
  { 
    id: 1, 
    name: "Sandeep Sharma", 
    rank: "Director General of Police (DGP)", 
    message: "The way this NGO supports the families of our fallen heroes is truly commendable. It provides a sense of security to those serving on the front lines.",
    location: "Police HQ, Delhi" 
  },
  { 
    id: 2, 
    name: "Vikram Rathore", 
    rank: "Inspector General (IG)", 
    message: "Their mental health workshops have helped many of our officers deal with the extreme stress of the job. A much-needed initiative for the force.",
    location: "Mumbai Circle" 
  },
  { 
    id: 3, 
    name: "Anjali Deshmukh", 
    rank: "Deputy Commissioner (DCP)", 
    message: "Education is the best gift. The scholarship programs run by AIPS ensure that the children of our martyrs never have to compromise on their dreams.",
    location: "Pune District" 
  },
  { 
    id: 4, 
    name: "Rajesh Kumar", 
    rank: "Assistant Sub-Inspector (ASI)", 
    message: "When I was injured on duty, this NGO was the first to reach out to my family with financial and emotional support. I am forever grateful.",
    location: "Haryana Police" 
  },
  { 
    id: 5, 
    name: "Amitabh Singh", 
    rank: "Superintendent of Police (SP)", 
    message: "Unity and Discipline are our core values, and this NGO reflects them perfectly in their selfless service to the police community.",
    location: "Lucknow" 
  },
  { 
    id: 6, 
    name: "Kiran Bedi (Retd.)", 
    rank: "IPS Officer", 
    message: "AIPS is bridge between society and the police. Their efforts in humanizing the force are vital for healthy community policing.",
    location: "National Level" 
  },
];

export default function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(NGO_MESSAGES.length / itemsPerPage);

  const currentItems = NGO_MESSAGES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="py-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-[#ef4444] font-bold mb-2 uppercase tracking-widest text-sm italic">Voices of Valor</h4>
            <h2 className="text-[#003366] text-3xl md:text-4xl font-bold">What the Force Says About Us</h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border-2 border-[#003366]/20 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border-2 border-[#003366]/20 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[380px]">
          <AnimatePresence mode="wait">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-8 text-[#003366]/10">
                  <Quote size={50} fill="currentColor" />
                </div>

                <div className="flex-grow">
                  <p className="text-gray-700 italic leading-relaxed text-lg mb-8 relative z-10">
                    "{item.message}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="bg-[#003366]/5 p-2 rounded-full text-[#003366]">
                    <UserCircle size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] leading-none mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#ef4444] text-xs font-bold uppercase tracking-tighter">
                      {item.rank}
                    </p>
                    <p className="text-gray-400 text-[10px] mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Bar Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentPage === idx ? "w-12 bg-[#003366]" : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}