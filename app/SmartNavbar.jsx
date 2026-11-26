'use client';

import { useEffect } from 'react';

/**
 * Smart-navbar controller for the existing (Webflow) `.navbar`.
 *
 * - Reuses the shared Lenis instance from SmoothScroll (window.lenis) — it does
 *   NOT create its own, so there is only ever one smooth-scroll engine.
 * - Hide on scroll-down / show on scroll-up via GSAP, driven from the Lenis
 *   scroll callback. No React state — direct DOM.
 * - IntersectionObserver active-section indicator: a small dot under the active
 *   nav link, animated with GSAP.
 *
 * Renders nothing; it enhances the markup the page injects (the navbar lives
 * inside the static Webflow content, so we reach it via the DOM).
 */
export default function SmartNavbar() {
  useEffect(() => {
    let observer;
    let cancelled = false;
    const cleanups = [];

    function start() {
      if (cancelled) return;

      const gsap = window.gsap;
      const lenis = window.lenis;
      const navEl = document.querySelector('.navbar');

      // Wait for the Webflow GSAP bundle, the shared Lenis instance, and the
      // injected navbar to all exist — retry shortly until they do.
      if (!gsap || !lenis || !navEl) {
        const t = setTimeout(start, 60);
        cleanups.push(() => clearTimeout(t));
        return;
      }

      // --- Smart hide on scroll-down / show on scroll-up --------------------
      const hideDistance = navEl.offsetHeight || 80; // fully tuck the bar away

      // Only animate when the state actually flips. Firing gsap.to() on every
      // scroll tick would restart the tween each frame, so it would crawl/never
      // finish. Tracking `hidden` makes the slide trigger instantly, once.
      let hidden = false;
      function setHidden(next) {
        if (next === hidden) return;
        hidden = next;
        gsap.to(navEl, {
          y: next ? -hideDistance : 0,
          duration: next ? 0.4 : 0.5,
          ease: next ? 'power3.in' : 'power3.out',
          overwrite: true,
        });
      }

      function onScroll({ scroll, direction }) {
        if (scroll < 80) {
          setHidden(false); // always show near the top
          return;
        }
        if (direction === 1) setHidden(true); // scrolling down -> hide
        else if (direction === -1) setHidden(false); // scrolling up -> show
      }
      lenis.on('scroll', onScroll);
      cleanups.push(() => lenis.off('scroll', onScroll));

      // --- Nav links: smooth-scroll + per-link active dot -------------------
      const navLinks = {}; // id -> { link, dot }
      document.querySelectorAll('.nav-link').forEach((link) => {
        const hash = link.getAttribute('href') || '';
        if (!hash.startsWith('#') || hash.length < 2) return;
        const id = hash.slice(1);

        // Smooth in-page navigation through Lenis (avoids native/Lenis fighting).
        const onClick = (e) => {
          const target = document.getElementById(id);
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target, { offset: -(navEl.offsetHeight || 0) });
        };
        link.addEventListener('click', onClick);
        cleanups.push(() => link.removeEventListener('click', onClick));

        // Active-section dot indicator.
        link.style.position = 'relative';
        const dot = document.createElement('span');
        dot.className = 'nav-dot';
        gsap.set(dot, { opacity: 0, scale: 0 });
        link.appendChild(dot);
        cleanups.push(() => dot.remove());

        navLinks[id] = { link, dot };
      });

      // --- Active section via IntersectionObserver --------------------------
      let activeId = null;
      function setActive(id) {
        if (id === activeId || !navLinks[id]) return;
        if (activeId && navLinks[activeId]) {
          gsap.to(navLinks[activeId].dot, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: 'power2.in',
          });
        }
        activeId = id;
        gsap.to(navLinks[id].dot, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(2)',
        });
      }

      const sections = Object.keys(navLinks)
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      // A thin band across the viewport center: the section crossing it is active.
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      );
      sections.forEach((s) => observer.observe(s));
    }

    start();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
