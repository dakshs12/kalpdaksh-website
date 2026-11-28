"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Mill {
  name: string;
  logo: string;
  width: number;
  height: number;
  isVertical?: boolean;
  sizeClass?: string;
  zoomClass?: string;
}

// Disjoint 6 + 6 split ensures zero overlap or simultaneous appearance of identical logos across the two rows
const ROW_ONE_PARTNERS: Mill[] = [
  { name: "Welspun Living", logo: "/assets/mills/welspun.png", width: 140, height: 48 },
  {
    name: "Trident Group",
    logo: "/assets/mills/trident.png",
    width: 269,
    height: 120,
    sizeClass: "max-h-14 sm:max-h-[72px]",
    zoomClass: "scale-[1.12]",
  },
  { name: "Olam Agro", logo: "/assets/mills/olam-agro.png", width: 325, height: 74 },
  {
    name: "LNJ Bhilwara Group",
    logo: "/assets/mills/lnj.png",
    width: 460,
    height: 120,
    sizeClass: "max-h-12 sm:max-h-[68px]",
    zoomClass: "scale-[1.24] translate-x-[5%]",
  },
  { name: "Reinhart", logo: "/assets/mills/reinhart.png", width: 325, height: 36 },
  {
    name: "Sintex Yarns",
    logo: "/assets/mills/sintex.png",
    width: 202,
    height: 120,
    sizeClass: "max-h-12 sm:max-h-[68px]",
  },
];

const ROW_TWO_PARTNERS: Mill[] = [
  {
    name: "Vardhman",
    logo: "/assets/mills/vardhman.png",
    width: 137,
    height: 240,
    isVertical: true,
    sizeClass: "max-h-14 sm:max-h-[72px]",
    zoomClass: "scale-[1.15]",
  },
  { name: "Alok Industries", logo: "/assets/mills/alok.png", width: 140, height: 48 },
  {
    name: "RSWM Limited",
    logo: "/assets/mills/rswm.png",
    width: 480,
    height: 229,
    sizeClass: "max-h-11 sm:max-h-16",
  },
  { name: "Pratibha Syntex", logo: "/assets/mills/pratibha.png", width: 135, height: 44 },
  {
    name: "LDC",
    logo: "/assets/mills/ldc.png",
    width: 400,
    height: 184,
    sizeClass: "max-h-11 sm:max-h-16",
  },
  { name: "Glencore", logo: "/assets/mills/glencore.png", width: 323, height: 57 },
];

const GROUP_COPIES = [0, 1, 2, 3];

function MillCard({ mill }: { mill: Mill }) {
  const heightClass =
    mill.sizeClass ??
    (mill.isVertical ? "max-h-9 sm:max-h-12" : "max-h-7 sm:max-h-10");

  return (
    <div className="w-36 sm:w-52 h-20 sm:h-28 bg-white border border-[#1f2a44]/15 rounded-lg p-2.5 sm:p-5 flex items-center justify-center shrink-0 shadow-xs hover:border-[#b08d57]/70 hover:shadow-md transition-all group">
      <div className={`flex items-center justify-center w-full h-full ${mill.zoomClass ?? ""}`}>
        <Image
          src={mill.logo}
          alt={mill.name}
          width={mill.width}
          height={mill.height}
          className={`${heightClass} max-w-full w-auto h-auto object-contain transition-transform group-hover:scale-105`}
        />
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  mills: Mill[];
  rowId: string;
  direction: "ltr" | "rtl";
  isPaused: boolean;
}

function MarqueeRow({ mills, rowId, direction, isPaused }: MarqueeRowProps) {
  return (
    <div className="marquee-wrapper relative w-full overflow-hidden">
      {/* Left & Right subtle edge fade gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 marquee-fade" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 marquee-fade" />

      <div
        className="marquee-track"
        style={{
          animationDirection: direction === "ltr" ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {GROUP_COPIES.map((copyIdx) => {
          const isDuplicate = copyIdx > 0;
          return (
            <div
              key={`${rowId}-copy-${copyIdx}`}
              className={`marquee-group ${isDuplicate ? "marquee-duplicate" : ""} flex gap-3 sm:gap-5 pr-3 sm:pr-5 shrink-0`}
              aria-hidden={isDuplicate ? "true" : undefined}
            >
              {mills.map((mill, idx) => (
                <MillCard key={`${rowId}-${copyIdx}-${idx}`} mill={mill} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
      {/* Dual Opposing Marquee Rows */}
      <div
        className="flex flex-col gap-3 sm:gap-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <MarqueeRow mills={ROW_ONE_PARTNERS} rowId="row1" direction="ltr" isPaused={isPaused} />
        <MarqueeRow mills={ROW_TWO_PARTNERS} rowId="row2" direction="rtl" isPaused={isPaused} />
      </div>

      {/* "and others across India" placed OUTSIDE the looping tracks */}
      <div className="max-w-6xl mx-auto px-6 mt-5 sm:mt-10 flex justify-center">
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-dashed border-[#1f2a44]/25 bg-[#f6f1e8]/60 hover:bg-[#f6f1e8] transition-colors shadow-xs">
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
