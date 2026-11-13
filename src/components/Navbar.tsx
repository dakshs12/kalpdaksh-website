"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Heritage", href: "#heritage" },
    { name: "Services", href: "#services" },
    { name: "Mills", href: "#mills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#18213a]/95 backdrop-blur-md border-t-2 border-[#b08d57] border-b border-[#3a4356]/40 transition-colors shadow-sm w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand & Seal */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 sm:gap-3 text-white no-underline group shrink-0 min-w-0"
          aria-label="Kalpdaksh Commotrade Home"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden ring-1 ring-[#b08d57]/70 shadow-sm shrink-0 group-hover:ring-[#b08d57] transition-all">
            <Image
              src="/assets/logo.png"
              alt="Kalpdaksh Commotrade seal logo"
              width={36}
              height={36}
              className="w-full h-full object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-base sm:text-lg tracking-wide text-[#f6f1e8] leading-tight truncate">
              Kalpdaksh{" "}
              <span className="text-[#b08d57] font-serif font-normal italic">
                Commotrade
              </span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#d9bc8a]/80 font-medium truncate">
              Central India Trade Desk
            </span>
          </div>
        </Link>

        {/* Desktop Nav Capsule (Hidden on mobile) */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#1f2a44]/80 border border-[#b08d57]/25 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner shrink-0"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1 text-xs uppercase tracking-[0.14em] rounded-full transition-all ${
                link.name === "Contact"
                  ? "text-[#b08d57] hover:text-[#d9bc8a] hover:bg-[#b08d57]/10 font-semibold"
                  : "text-[#f6f1e8]/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side controls: Desktop CTA & Mobile Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Get in touch button - perfectly scaled for all screens, never clipped */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#b08d57] hover:bg-[#c09b67] text-[#1f2a44] font-semibold text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.14em] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shadow-xs shrink-0 whitespace-nowrap"
          >
            <span>Get in touch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f2a44] animate-pulse" />
          </Link>

          {/* Compact Mobile Menu Toggle Button (Visible only on mobile) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded border border-[#b08d57]/30 text-[#f6f1e8] hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#b08d57]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Compact Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18213a]/98 backdrop-blur-xl border-t border-white/10 border-b border-[#b08d57]/30 px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`py-2 text-xs uppercase tracking-[0.16em] border-b border-white/5 transition-colors ${
                  link.name === "Contact"
                    ? "text-[#b08d57] font-semibold"
                    : "text-[#f6f1e8]/85 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
