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
  // Guard clause for empty data
  if (!notices || notices.length === 0) return null;

  const featuredNotice = notices[0];
  const listNotices = notices.slice(1, 5); // Display up to 4 in the list

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-10">Recent Events</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: List of Blog/Notices */}
          <div className="lg:col-span-5 space-y-4">
            {listNotices.map((notice) => (
              <Link 
                key={notice.id} 
                href={`/notices/${notice.slug}`}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="shrink-0 bg-gray-50 p-2 rounded-xl shadow-sm">
                  <Image 
                    src="/police-logo.png" // Replace with your logo path
                    alt="AIPS Logo" 
                    width={45} 
                    height={45} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[#003366] text-sm md:text-base group-hover:text-blue-600 transition-colors">
                      {notice.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {notice.noticeFields.publishDate || "N/A"}
                    </span>
                  </div>
                  {/* Strips HTML tags from content for the short description */}
                  <p className="text-xs text-[#003366]/70 line-clamp-1 mt-1">
                    {notice.content.replace(/<[^>]*>?/gm, '').substring(0, 60)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT: Featured Highlight */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="relative aspect-video w-full bg-gray-200">
              {/* Using a placeholder if no featured image exists in your GraphQL yet */}
              <Image
                src="/felicitating-commisoner.jpg" 
                alt={featuredNotice.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8 space-y-4 flex-grow">
              <h3 className="text-3xl font-bold text-black leading-tight">
                {featuredNotice.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-2">
                {featuredNotice.content.replace(/<[^>]*>?/gm, '')}
              </p>
              
              <Link 
                href={`/notices/${featuredNotice.slug}`}
                className="mt-4 inline-flex items-center justify-between w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-4 px-6 rounded-xl transition-all group"
              >
                <span>Read More</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}