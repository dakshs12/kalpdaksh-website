"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Mill {
  name: string;
  logo: string;
  width: number;
  height: number;
  isVertical?: boolean;
}

const NINE_MILLS: Mill[] = [
  { name: "Welspun Living", logo: "/assets/mills/welspun.png", width: 140, height: 48 },
  { name: "Vardhman", logo: "/assets/mills/vardhman.png", width: 90, height: 52, isVertical: true },
  { name: "Trident Group", logo: "/assets/mills/trident.png", width: 130, height: 48 },
  { name: "Alok Industries", logo: "/assets/mills/alok.png", width: 140, height: 48 },
  { name: "Sintex Yarns", logo: "/assets/mills/sintex.png", width: 120, height: 48 },
  { name: "RSWM Limited", logo: "/assets/mills/rswm.png", width: 125, height: 48 },
  { name: "LNJ Bhilwara Group", logo: "/assets/mills/lnj.png", width: 140, height: 46 },
  { name: "Pratibha Syntex", logo: "/assets/mills/pratibha.png", width: 135, height: 44 },
  { name: "Arvind Limited", logo: "/assets/mills/arvind.png", width: 130, height: 46 },
];

export default function MillsMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    // Resume marquee smoothly after 1.5 seconds of no touch interaction
    touchTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Marquee Carousel Outer Container */}
      <div
        className="marquee-wrapper relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Left & Right subtle edge fade gradients on desktop */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 marquee-fade" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 marquee-fade" />

        <div
          className="marquee-track"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {/* Primary Group - 9 Mills Only */}
          <div className="marquee-group flex gap-3 sm:gap-5 pr-3 sm:pr-5 shrink-0">
            {NINE_MILLS.map((mill, idx) => (
              <div
                key={`mill-1-${idx}`}
                className="w-36 sm:w-52 h-20 sm:h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-2.5 sm:p-5 flex items-center justify-center shrink-0 shadow-xs hover:border-[#b08d57]/70 hover:shadow-md transition-all group"
              >
                <Image
                  src={mill.logo}
                  alt={mill.name}
                  width={mill.width}
                  height={mill.height}
                  className={`${
                    mill.isVertical
                      ? "max-h-9 sm:max-h-12"
                      : "max-h-7 sm:max-h-10"
                  } w-auto object-contain transition-transform group-hover:scale-105`}
                />
              </div>
            ))}
          </div>

          {/* Duplicated Group for Infinite Loop (hidden in reduced-motion mode) */}
          <div
            className="marquee-group marquee-duplicate flex gap-3 sm:gap-5 pr-3 sm:pr-5 shrink-0"
            aria-hidden="true"
          >
            {NINE_MILLS.map((mill, idx) => (
              <div
                key={`mill-2-${idx}`}
                className="w-36 sm:w-52 h-20 sm:h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-2.5 sm:p-5 flex items-center justify-center shrink-0 shadow-xs hover:border-[#b08d57]/70 hover:shadow-md transition-all group"
              >
                <Image
                  src={mill.logo}
                  alt={mill.name}
                  width={mill.width}
                  height={mill.height}
                  className={`${
                    mill.isVertical
                      ? "max-h-9 sm:max-h-12"
                      : "max-h-7 sm:max-h-10"
                  } w-auto object-contain transition-transform group-hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "and others across India" placed OUTSIDE the looping track */}
      <div className="max-w-6xl mx-auto px-6 mt-8 sm:mt-10 flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-[#1f2a44]/25 bg-[#f6f1e8]/60 hover:bg-[#f6f1e8] transition-colors shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#b08d57] shrink-0" />
          <span className="font-serif italic text-sm sm:text-base text-[#1f2a44] font-medium">
            and others across India
          </span>
          <span className="text-xs sm:text-sm text-[#5f6b85] font-normal hidden sm:inline">
            &middot; Serving leading spinning &amp; composite mills nationwide
          </span>
        </div>
      </div>
    </div>
  );
}
