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

      // 3. Origin & Fiber Sourcing: CottonConnect-style pinned scroll moment
      if (document.querySelector("#origin")) {
        // Pin the cotton section so the next section (#services) slides up over it
        ScrollTrigger.create({
          trigger: "#origin",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });

        // Animate background image from scale 1.4 down to 1.0 (scrubbed linearly to scroll)
        // and fade dark overlay from 0 to about 0.8 opacity over the same range
        const originTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#origin",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        originTimeline
          .fromTo(
            ".origin-bg-image",
            { scale: 1.4, transformOrigin: "center center" },
            { scale: 1.0, ease: "none" },
            0
          )
          .fromTo(
            ".origin-overlay",
            { opacity: 0 },
            { opacity: 0.8, ease: "none" },
            0
          );
      }

      // 4. Subtle reveals on scroll for content sections
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
