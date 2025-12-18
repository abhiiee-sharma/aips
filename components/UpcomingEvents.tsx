"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Randomly generated event data
const ALL_EVENTS = [
  { id: 1, title: "Blood Donation Camp", date: "24 Oct 2024", location: "New Delhi", desc: "A drive to support police hospitals and emergency reserves." },
  { id: 2, title: "Martyrs' Day Parade", date: "21 Oct 2024", location: "Mumbai", desc: "Honoring the brave souls who sacrificed their lives for the nation." },
  { id: 3, title: "Mental Health Workshop", date: "15 Nov 2024", location: "Pune", desc: "Stress management and wellness session for active officers." },
  { id: 4, title: "Cyber Security Seminar", date: "02 Dec 2024", location: "Bangalore", desc: "Training for families on digital safety and fraud prevention." },
  { id: 5, title: "Police Sports Meet", date: "10 Jan 2025", location: "Kolkata", desc: "Annual athletic competition for state police departments." },
  { id: 6, title: "Scholarship Distribution", date: "20 Jan 2025", location: "Lucknow", desc: "Providing educational aid to children of fallen heroes." },
];

export default function EventsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ALL_EVENTS.length / itemsPerPage);

  // Calculate the three items to show based on the current page
  const currentItems = ALL_EVENTS.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Buttons */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h4 className="text-[#ef4444] font-bold mb-2 uppercase tracking-widest text-sm">Upcoming Events</h4>
            <h2 className="text-[#003366] text-4xl font-bold">Latest Activities</h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#003366] hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#003366] hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* The Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentItems.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="text-[#ef4444]" />
                  <span>{event.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#003366] mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {event.desc}
                </p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium pt-4 border-t border-gray-50">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2 transition-all rounded-full ${
                currentPage === idx ? "w-8 bg-[#003366]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}