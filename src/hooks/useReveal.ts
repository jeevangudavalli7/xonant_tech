"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds 'is-visible' class to elements with 'reveal' class when they enter viewport.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      // Fallback: reveal all elements immediately if no IntersectionObserver
      const els = document.querySelectorAll(".reveal:not(.is-visible)");
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    elements.forEach((el) => observer.observe(el));

    // Also observe any elements added soon after hydration
    const timer = setTimeout(() => {
      const remaining = document.querySelectorAll(".reveal:not(.is-visible)");
      remaining.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}

/**
 * Component-level reveal hook with ref
 */
export function useRevealElement<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px"
) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isRevealed };
}

export default useReveal;
