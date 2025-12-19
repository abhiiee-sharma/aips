"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white border-t-4 border-[#ef4444]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <Image 
                  src="/police-emblem.png" 
                  alt="AIPS Logo" 
                  width={40} 
                  height={50} 
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight tracking-tight">
                  All India <br /> Police Sahyog
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Ekta aur Anushasan" — Committed to the welfare and dignity of our police forces across the nation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/" className="hover:text-yellow-400 flex items-center gap-2 group"><ArrowRight size={12} className="text-[#ef4444]" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 flex items-center gap-2 group"><ArrowRight size={12} className="text-[#ef4444]" /> About Us</Link></li>
              <li><Link href="/notices" className="hover:text-yellow-400 flex items-center gap-2 group"><ArrowRight size={12} className="text-[#ef4444]" /> Notices</Link></li>
              <li><Link href="/events" className="hover:text-yellow-400 flex items-center gap-2 group"><ArrowRight size={12} className="text-[#ef4444]" /> Events</Link></li>
              <li><Link href="/donate" className="hover:text-yellow-400 flex items-center gap-2 group"><ArrowRight size={12} className="text-[#ef4444]" /> Donate</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#ef4444] shrink-0" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#ef4444] shrink-0" />
                <span className="break-all">contact@aips-sahyog.org</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ef4444] shrink-0" />
                <span className="leading-relaxed">
                  123, Police Welfare Complex, <br />
                  Sector 15, New Delhi - 110001
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: NITI Aayog Info */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold mb-3 text-sm italic">Certification</h4>
            <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
              Registered under NITI Aayog (NGO Darpan). We maintain 100% transparency in our welfare initiatives.
            </p>
            <Link 
              href="/registration" 
              className="block w-full text-center bg-yellow-400 text-[#003366] font-bold py-2 rounded-lg text-xs hover:bg-yellow-300 transition-all"
            >
              Become a Member
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          <p>© {currentYear} All India Police Sahyog. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}