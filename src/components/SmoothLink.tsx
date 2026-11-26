"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

interface SmoothLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

/**
 * Reliable in-page anchor link that always scrolls to the target section even if
 * the URL hash already matches href (unlike Next.js <Link href="#...">).
 */
export default function SmoothLink({
  href,
  onClick,
  children,
  ...props
}: SmoothLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      !href.startsWith("#")
    ) {
      return;
    }

    const targetId = href.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    e.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior });
    } else {
      target.scrollIntoView({ behavior, block: "start" });
    }

    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
