import React from "react";
import { Shield, Target, Heart, Phone, Mail, ChevronRight, Download, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-6">
      
      {/* 1. GOVERNMENT AUTHENTICATION SECTION */}
      {/* Reduced padding to detach from navbar but stay clean */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-green-600 mt-1 shrink-0" size={24} />
            <div>
              <h2 className="text-[#003366] text-xl font-bold tracking-tight">
                NITI Aayog Registered NGO
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-2xl leading-relaxed">
                All India Police Sahyog is a government-approved entity dedicated to the welfare, 
                rights, and dignity of our police personnel and their families.
              </p>
            </div>
          </div>
          
          <a 
            href="/docs/niti-aayog-certification.pdf"
            download
            className="flex items-center gap-2 text-[#003366] font-bold text-sm hover:text-[#ef4444] transition-colors group"
          >
            <Download size={18} />
            <span>Download Certification</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. VISION & MISSION - HORIZONTAL TYPOGRAPHY LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-2">
        <div className="mb-12">
          <p className="text-[#ef4444] font-bold mb-1 uppercase tracking-widest text-[11px] italic">
            Strategic Intent
          </p>
          <h1 className="text-[#003366] text-3xl md:text-4xl font-bold tracking-tight">
            Our Vision & Mission
          </h1>
        </div>

        <div className="space-y-6">
          {/* Mission Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-3 text-[#ef4444]">
                <Target size={20} />
                <span className="font-bold uppercase tracking-tighter text-sm">The Mission</span>
              </div>
              <h3 className="text-[#003366] text-2xl font-bold mt-2 italic">Empowering the Force</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-8">
                To provide a robust safety net for the families of our fallen heroes and active officers. 
                We facilitate education, healthcare, and administrative support, ensuring that 
                those who protect the nation are never left behind in their time of need.
              </p>
            </div>
          </div>

          {/* Vision Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-3 text-[#ef4444]">
                <Heart size={20} />
                <span className="font-bold uppercase tracking-tighter text-sm">The Vision</span>
              </div>
              <h3 className="text-[#003366] text-2xl font-bold mt-2 italic">A Grateful Nation</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-8">
                We envision a future where every police officer serves with total mental peace, 
                secure in the knowledge that their family’s well-being is the responsibility of 
                a grateful society and a transparent support system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL CTA - NO CARD STRUCTURE */}
      {/* 4. MEMBERSHIP OVERVIEW SECTION */}
<section className="max-w-7xl mx-auto px-6 py-14">
  <div className="border-t border-gray-200 pt-12">

    {/* Section Header */}
    <div className="mb-10">
      <p className="text-[#ef4444] font-bold mb-1 uppercase tracking-widest text-[11px] italic">
        Human Strength
      </p>
      <h2 className="text-[#003366] text-3xl font-bold tracking-tight">
        Membership Overview
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

      {/* LEFT: COUNTS */}
      <div className="space-y-10">
        {/* Total Members */}
        <div>
          <div className="flex items-center gap-3 text-[#003366]">
            <Shield size={22} />
            <span className="uppercase text-sm font-bold tracking-wide">
              Total Members
            </span>
          </div>
          <p className="text-5xl font-bold text-[#003366] mt-2">
            50,000+
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Registered personnel and family members nationwide
          </p>
        </div>

        {/* Active Members */}
        <div>
          <div className="flex items-center gap-3 text-[#003366]">
            <Target size={22} />
            <span className="uppercase text-sm font-bold tracking-wide">
              Active Members
            </span>
          </div>
          <p className="text-5xl font-bold text-[#003366] mt-2">
            15,000+
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Currently engaged police personnel & volunteers
          </p>
        </div>
      </div>

      {/* RIGHT: STATE-WISE DATA */}
      <div className="lg:col-span-2">
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-[#003366] font-bold tracking-tight">
              State-wise Member Distribution
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Coverage across States & Union Territories
            </p>
          </div>

          <div className="divide-y">
            {[
              { state: "Uttar Pradesh", count: "8,500+" },
              { state: "Maharashtra", count: "6,200+" },
              { state: "Bihar", count: "5,400+" },
              { state: "Rajasthan", count: "4,100+" },
              { state: "Madhya Pradesh", count: "3,800+" },
              { state: "Other States & UTs", count: "22,000+" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-gray-700 font-medium">
                  {item.state}
                </span>
                <span className="text-[#003366] font-bold">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      
    </main>
  );
}