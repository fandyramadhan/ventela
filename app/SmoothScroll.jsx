"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scrolling (Lenis).
 *
 * Owns the single Lenis instance and exposes it as `window.lenis` so other
 * controllers (e.g. SmartNavbar) reuse it instead of creating a second one.
 *
 * Smooth scroll starts immediately via its own rAF loop — it does NOT wait for
 * the Webflow GSAP bundle. Once window.ScrollTrigger is present, we wire
 * `lenis.on('scroll', ScrollTrigger.update)` so the page's existing
 * ScrollTriggers stay in sync with the smoothed scroll position.
 *
 * Renders nothing.
 */
export default function SmoothScroll() {
  useEffect(() => {
    let cancelled = false;
    let rafId;
    let pollId;

    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    window.lenis = lenis;

    // Single rAF loop driving Lenis.
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep the page's GSAP ScrollTriggers in sync once they exist.
    function wireScrollTrigger() {
      if (cancelled) return;
      if (window.ScrollTrigger) {
        lenis.on("scroll", window.ScrollTrigger.update);
        if (window.gsap) window.gsap.ticker.lagSmoothing(0);
      } else {
        pollId = setTimeout(wireScrollTrigger, 100);
      }
    }
    wireScrollTrigger();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (pollId) clearTimeout(pollId);
      lenis.destroy();
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);

  return null;
}
