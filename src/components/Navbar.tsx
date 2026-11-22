"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Mill Relationships", href: "#mills" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#fdfbf7]/95 backdrop-blur-md shadow-xs border-b border-[#b08d57]/20 py-3.5 sm:py-4"
          : "bg-transparent py-5 sm:py-6 md:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-6">
        {/* Full Brandmark Logo - Increased Size */}
        <Link
          href="#top"
          className="flex items-center text-white no-underline group shrink min-w-0"
          aria-label="Kalpdaksh Commotrade Home"
        >
          <Image
            src="/assets/full-logo.png"
            alt="Kalpdaksh Commotrade Pvt Ltd"
            width={320}
            height={70}
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Nav Links - Increased Size, Permanent Home Underline, Smooth Underline Hover Animation */}
        <nav
          className="hidden lg:flex items-center gap-7 lg:gap-9 xl:gap-11 shrink-0"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isHome = link.name === "Home";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-serif text-base sm:text-lg lg:text-[19px] tracking-normal transition-all py-1.5 whitespace-nowrap text-[#2a1e17] ${
                  isHome
                    ? "font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#b08d57]"
                    : "font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#b08d57] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out motion-reduce:after:transition-none"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#b08d57]/40 text-[#2a1e17] bg-white/60 backdrop-blur-sm hover:bg-[#b08d57]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b08d57]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfbf7]/98 backdrop-blur-xl border-t border-black/5 border-b border-[#b08d57]/30 px-6 py-5 shadow-xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isHome = link.name === "Home";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-serif py-3 text-base sm:text-lg tracking-wide border-b border-black/5 flex items-center justify-between text-[#2a1e17] transition-colors ${
                    isHome
                      ? "text-[#b08d57] font-semibold"
                      : "hover:text-[#b08d57] font-medium"
                  }`}
                >
                  <span>{link.name}</span>
                  {isHome && (
                    <span className="w-2 h-2 rounded-full bg-[#b08d57]" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Direct Contact Actions on Mobile */}
          <div className="pt-3 mt-1 border-t border-[#b08d57]/20 flex flex-col gap-2">
            <a
              href="tel:+919203825265"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-black/[0.03] border border-black/5 text-[#2a1e17] text-xs font-medium hover:bg-black/[0.06] transition-colors"
            >
              <span className="text-[#b08d57] uppercase tracking-wider text-[10px] font-semibold">Call Trade Desk</span>
              <span className="font-semibold tracking-wide">+91 92038 25265</span>
            </a>
            <a
              href="https://walink.me/6coh00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#128C7E] text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
            >
              <span className="uppercase tracking-wider text-[10px] font-semibold">WhatsApp</span>
              <span className="font-semibold">Chat on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
