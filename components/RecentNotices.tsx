"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NoticeNode {
  id: string;
  title: string;
  slug: string;
  content: string;
  noticeFields: {
    publishDate: string;
  };
}

export default function RecentNotices({ notices }: { notices: NoticeNode[] }) {
  // Ensure we have data to render
  if (!notices || notices.length === 0) return null;

  // 1. RIGHT SIDE: The very first notice in the array
  const featuredNotice = notices[0];

  // 2. LEFT SIDE: The next three notices (Index 1, 2, and 3)
  // .slice(1, 4) takes elements at index 1, 2, and 3
  const listNotices = notices.slice(1, 4);

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h4 className="text-[#ef4444] font-bold mb-2 uppercase tracking-widest text-sm italic">
            Latest Updates
          </h4>
          <h2 className="text-[#003366] text-4xl font-bold">Recent Events & Notices</h2>
        </div>

        {/* 50/50 Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: List of exactly 3 Notices */}
          <div className="flex flex-col gap-4">
            {listNotices.map((notice) => (
              <Link 
                key={notice.id} 
                href={`/notices/${notice.slug}`}
                className="flex items-center gap-5 bg-gray-50 p-5 rounded-2xl border border-transparent hover:border-[#003366]/20 hover:bg-white hover:shadow-lg transition-all group flex-1"
              >
                <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <Image 
                    src="/police-logo.png" 
                    alt="AIPS Logo" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-[#003366] text-base group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {notice.content.replace(/<[^>]*>?/gm, '').substring(0, 80)}...
                  </p>
                  <div className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    Published: {notice.noticeFields.publishDate || "N/A"}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT: The Highlighted Notice */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full">
            <div className="relative h-64 w-full">
              <Image
                src="/images/about-main.jpg" 
                alt={featuredNotice.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#ef4444] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Featured Highlight
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-between grow">
              <div>
                <h3 className="text-2xl font-bold text-[#003366] leading-tight mb-4">
                  {featuredNotice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {featuredNotice.content.replace(/<[^>]*>?/gm, '')}
                </p>
              </div>
              
              <Link 
                href={`/notices/${featuredNotice.slug}`}
                className="mt-6 inline-flex items-center justify-between w-full bg-[#003366] hover:bg-[#002244] text-white font-bold py-4 px-8 rounded-xl transition-all group"
              >
                <span className="text-sm">Read Full Notice</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}