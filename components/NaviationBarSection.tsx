"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "/" }, // Added Home
  { label: "About Us", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Notices", href: "/notices" },
  { label: "Events", href: "/events" },
];

export default function NavigationBarSection() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#003366]">
      <div className="mx-auto flex h-16.5 max-w-7xl items-center justify-between px-4">

        {/* LEFT: Logo / Title */}
        <div className="text-white text-lg font-semibold">
          AIPS
        </div>

        {/* CENTERED NAV CONTENT */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg transition-opacity ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:opacity-80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Become Member Button - Now part of the centered group */}
          <Link
            href="/registration"
            className="rounded-lg bg-yellow-400 px-5 py-2 text-[#131313] font-semibold hover:bg-yellow-300"
          >
            Become Member
          </Link>
        </div>

        {/* RIGHT: Empty div to balance the AIPS logo and keep nav truly centered */}
        <div className="hidden md:block w-[45px]"></div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-[#003366] border-t border-white/20">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 text-base ${
                pathname === item.href ? "bg-white/10 text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/registration"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-4 bg-yellow-400 text-[#131313] font-semibold"
          >
            Become Member
          </Link>
        </div>
      )}
    </nav>
  );
}