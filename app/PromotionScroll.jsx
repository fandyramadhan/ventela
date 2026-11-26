'use client';

import { useEffect } from 'react';

/**
 * Pinned scroll animation for the #promotion section.
 *
 * Uses the page's GLOBAL gsap + ScrollTrigger (loaded by the Webflow body
 * scripts) so it stays in sync with Lenis (SmoothScroll wires
 * lenis.on('scroll', ScrollTrigger.update)).
 *
 * The section pins for ~150vh of scroll, and over that range:
 *   1. start: image only, white background (the CSS default).
 *   2. the wording (.promo-content-inner) slides up from below + fades in.
 *   3. before the wording reaches center, the background smoothly transitions
 *      white -> blue and the text flips black -> white.
 *
 * Renders nothing; it drives the static markup the page injects.
 */
export default function PromotionScroll() {
  useEffect(() => {
    let cancelled = false;
    let st;
    let tl;
    let cleanupTimeout;

    function start() {
      if (cancelled) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const section = document.querySelector('#promotion');
      const inner = section && section.querySelector('.promo-content-inner');
      const title = section && section.querySelector('.promo-title');
      const desc = section && section.querySelector('.promo-desc');

      if (!gsap || !ScrollTrigger || !section || !inner) {
        const t = setTimeout(start, 60);
        cleanupTimeout = t;
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Start state: wording hidden below center (CSS also keeps it hidden so
      // there is no flash before this runs).
      gsap.set(inner, { yPercent: 100, opacity: 0 });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      st = tl.scrollTrigger;

      // 1) Wording rises from the bottom over the first ~60% of the scroll.
      tl.to(inner, { yPercent: 0, opacity: 1, ease: 'none', duration: 0.6 }, 0);

      // 2) Background + text flip, finishing before the wording is centered.
      tl.to(section, { backgroundColor: '#012d80', ease: 'none', duration: 0.3 }, 0.15);
      if (title) tl.to(title, { color: '#ffffff', ease: 'none', duration: 0.3 }, 0.15);
      if (desc) tl.to(desc, { color: 'rgba(255,255,255,0.75)', ease: 'none', duration: 0.3 }, 0.15);

      // Positions can be off if fonts/images settle late — recalc once.
      ScrollTrigger.refresh();
    }

    start();

    return () => {
      cancelled = true;
      if (cleanupTimeout) clearTimeout(cleanupTimeout);
      if (tl) tl.kill();
      if (st) st.kill();
    };
  }, []);

  return null;
}
