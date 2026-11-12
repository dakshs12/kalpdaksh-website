"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  useEffect(() => {
    // Honor prefers-reduced-motion: if user prefers reduced motion, skip all GSAP animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero fade-rise animation
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .fromTo(
          ".hero-kicker",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
        )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.45"
        )
        .fromTo(
          ".hero-explainer",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );

      // 2. Heritage background parallax
      gsap.to(".heritage-bg", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: "#heritage",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Subtle reveals on scroll for content sections
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
