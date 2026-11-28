"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Children,
  type ReactNode,
} from "react";

interface MobileSnapCarouselProps {
  /** Accessible name for the carousel region */
  label: string;
  /** Short titles for each slide, used for marker labels and status updates */
  slideTitles: string[];
  /** Tailwind classes applied at md+ to form the desktop grid */
  desktopGridClass: string;
  /** Surface theme so markers & buttons maintain accessible contrast */
  variant: "dark" | "light";
  children: ReactNode;
}

/**
 * Renders children as a standard multi-column grid on desktop (md+) and a
 * natively scrollable CSS scroll-snap peek carousel on mobile (< md).
 */
export default function MobileSnapCarousel({
  label,
  slideTitles,
  desktopGridClass,
  variant,
  children,
}: MobileSnapCarouselProps) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const lastSettledIndexRef = useRef(0);
  const pendingTargetRef = useRef<number | null>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return 0;
    const center = track.scrollLeft + track.clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    items.forEach((item, idx) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(itemCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    return bestIdx;
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    const targetItem = items[index];
    if (!targetItem) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const left =
      targetItem.offsetLeft - (track.clientWidth - targetItem.offsetWidth) / 2;

    pendingTargetRef.current = index;
    setActiveIndex(index);
    track.scrollTo({
      left: Math.max(0, left),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number | null = null;

    const handleSettled = () => {
      const settledIndex = getNearestIndex();
      pendingTargetRef.current = null;
      setActiveIndex(settledIndex);
      if (settledIndex !== lastSettledIndexRef.current) {
        lastSettledIndexRef.current = settledIndex;
        const title = slideTitles[settledIndex] ?? "";
        setStatusMessage(
          `Slide ${settledIndex + 1} of ${slides.length}${title ? `: ${title}` : ""}`
        );
      }
    };

    const handleScroll = () => {
      if (pendingTargetRef.current === null) {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const nearest = getNearestIndex();
          setActiveIndex((prev) => (prev === nearest ? prev : nearest));
        });
      }

      if (!("onscrollend" in window)) {
        if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
        settleTimerRef.current = setTimeout(handleSettled, 140);
      }
    };

    const handleScrollEnd = () => {
      handleSettled();
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("scrollend", handleScrollEnd);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("scrollend", handleScrollEnd);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    };
  }, [getNearestIndex, slideTitles, slides.length]);

  const handleStep = (delta: number) => {
    const base =
      pendingTargetRef.current !== null ? pendingTargetRef.current : activeIndex;
    const next = (base + delta + slides.length) % slides.length;
    scrollToSlide(next);
  };

  const isDark = variant === "dark";
  const focusClass = isDark
    ? "focus-visible:outline-2 focus-visible:outline-[#d9bc8a]"
    : "focus-visible:outline-2 focus-visible:outline-[#1f2a44]";
  const navBtnClass = isDark
    ? "border-[#d9bc8a]/45 bg-[#1f2a44]/85 text-[#f6f1e8] hover:border-[#d9bc8a] hover:bg-[#b08d57]/20"
    : "border-[#b08d57]/60 bg-white text-[#1f2a44] hover:border-[#1f2a44] hover:bg-[#f6f1e8] shadow-xs";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="reveal"
    >
      <div
        ref={trackRef}
        tabIndex={0}
        className={`relative flex md:grid ${desktopGridClass} gap-3.5 overflow-x-auto md:overflow-visible snap-x snap-mandatory overscroll-x-contain -mx-6 px-6 md:mx-0 md:px-0 pb-1 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-y md:touch-auto rounded-lg ${focusClass}`}
      >
        {slides.map((child, idx) => (
          <div
            key={slideTitles[idx] ?? idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${slides.length}`}
            className="flex-[0_0_84%] sm:flex-[0_0_68%] md:flex-initial snap-center flex *:w-full"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Mobile-only slide markers & prev/next controls */}
      <div className="mt-4 flex items-center justify-between md:hidden">
        <div className="flex items-center gap-0.5" role="group" aria-label={`Choose ${label} slide`}>
          {slides.map((_, idx) => {
            const isActive = activeIndex === idx;
            const title = slideTitles[idx] ?? `Slide ${idx + 1}`;
            const dotClass = isActive
              ? isDark
                ? "w-6 bg-[#d9bc8a] border-[#d9bc8a]"
                : "w-6 bg-[#1f2a44] border-[#1f2a44]"
              : isDark
              ? "w-2 bg-white/25 border-white/45"
              : "w-2 bg-[#1f2a44]/20 border-[#1f2a44]/40";

            return (
              <button
                key={title}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Show ${title} (${idx + 1} of ${slides.length})`}
                aria-current={isActive ? "true" : undefined}
                className={`p-2 flex items-center justify-center touch-manipulation rounded-full ${focusClass}`}
              >
                <span className={`block h-2 rounded-full transition-all border ${dotClass}`} />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            aria-label={`Previous ${label}`}
            className={`w-9 h-9 rounded-full border flex items-center justify-center active:scale-95 transition-all touch-manipulation ${navBtnClass} ${focusClass}`}
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => handleStep(1)}
            aria-label={`Next ${label}`}
            className={`w-9 h-9 rounded-full border flex items-center justify-center active:scale-95 transition-all touch-manipulation ${navBtnClass} ${focusClass}`}
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </p>
    </div>
  );
}
