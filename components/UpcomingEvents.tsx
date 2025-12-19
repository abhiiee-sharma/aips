"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventNode {
  id: string;
  title: string;
  slug: string;
  content: string;
  eventFields: {
    eventDate: string;
    eventTime: string;
    location: string;
    eventStatus: string;
  };
}

export default function UpcomingEvents({ events = [] }: { events: EventNode[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  
  // Filter to only show 'Upcoming' events if you prefer, or show all
  const displayEvents = events;
  const totalPages = Math.ceil(displayEvents.length / itemsPerPage);

  const currentItems = displayEvents.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  if (displayEvents.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h4 className="text-[#ef4444] font-bold mb-2 uppercase tracking-widest text-xs italic">Programs & Initiatives</h4>
            <h2 className="text-[#003366] text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              disabled={totalPages <= 1}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#003366] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={totalPages <= 1}
              className="p-3 rounded-full border border-gray-300 hover:bg-[#003366] hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="contents" // Allows grid to function normally
            >
              {currentItems.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-[#ef4444] text-xs font-bold uppercase">
                      <Calendar size={14} />
                      <span>{event.eventFields.eventDate}</span>
                    </div>
                    <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase border border-green-100">
                      {event.eventFields.eventStatus}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#003366] mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                    {event.content.replace(/<[^>]*>?/gm, '')}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-gray-400 text-[11px] font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span className="line-clamp-1">{event.eventFields.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{event.eventFields.eventTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  currentPage === idx ? "w-8 bg-[#003366]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}