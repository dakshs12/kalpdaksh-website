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
          ? "py-2 sm:py-2.5 px-4 sm:px-6 md:px-8"
          : "py-3 sm:py-4 px-4 sm:px-6 md:px-8"
      }`}
    >
      <div
        className={`max-w-[1536px] mx-auto transition-all duration-300 rounded-2xl sm:rounded-3xl border shadow-sm ${
          scrolled
            ? "bg-[#fdfbf7]/96 backdrop-blur-md border-[#b08d57]/30 shadow-md"
            : "bg-[#fdfbf7]/92 backdrop-blur-md border-[#b08d57]/35 shadow-sm"
        } ${mobileMenuOpen ? "shadow-2xl border-[#b08d57]/45" : ""}`}
      >
        <div
          className={`px-5 sm:px-8 md:px-10 flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-3.5"
          }`}
        >
          {/* Full Brandmark Logo */}
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
              className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Nav Links - Smooth Underline Hover Animation on all links */}
          <nav
            className="hidden lg:flex items-center gap-7 lg:gap-9 xl:gap-11 shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-serif text-base sm:text-lg lg:text-[18.5px] tracking-normal font-medium transition-all py-1.5 whitespace-nowrap text-[#2a1e17] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#b08d57] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out motion-reduce:after:transition-none"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#b08d57]/40 text-[#2a1e17] bg-white/60 hover:bg-[#b08d57]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b08d57]"
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

        {/* Mobile Dropdown Menu - Seamlessly integrated inside the rounded navbar card */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#b08d57]/20 px-5 sm:px-8 pt-2 pb-5 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group font-serif py-3.5 px-3 rounded-xl text-base sm:text-lg tracking-wide border-b border-[#b08d57]/15 last:border-b-0 flex items-center justify-between text-[#2a1e17] hover:text-[#b08d57] hover:bg-[#b08d57]/10 active:bg-[#b08d57]/15 font-medium transition-all"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
