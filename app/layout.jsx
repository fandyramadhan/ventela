import wf from "@/wf-raw.json";
import SmoothScroll from "./SmoothScroll";
import SmartNavbar from "./SmartNavbar";
import PromotionScroll from "./PromotionScroll";

const DESCRIPTION =
  "Monocrome is a bold and modern Webflow template for creative agencies. Built for branding, portfolios, and digital studios, it combines clean layouts, strong typography, and smooth interactions to showcase your work with impact.";
const TITLE = "Monocrome - Webflow HTML website template";

export const metadata = {
  metadataBase: new URL("https://monocrome.webflow.io"),
  title: TITLE,
  description: DESCRIPTION,
  generator: "Webflow",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/69f8b858d45a0527f627e536_Open_Graph.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// End-of-<body> runtime scripts, in the exact order of the source index.html.
// They are rendered into the initial HTML (not loaded from a useEffect) so they
// execute during the page load, with DOMContentLoaded/load firing naturally.
// This is required: the template's GSAP/ScrollTrigger/SplitText + Webflow-IX
// animation setup is gated on those events and only initializes correctly when
// the runtime runs during load (verified: 69 tweens / 32 ScrollTriggers, no
// errors — matching the source). Running it post-hydration leaves only the
// CSS failsafe reveals.
const BODY_SCRIPTS = [
  "/assets/jquery-3.5.1.min.dc5e7f18c8.js",
  "/assets/webflow.schunk.a3140c51201be139.js",
  "/assets/webflow.schunk.9f186da3bffc57cb.js",
  "/assets/webflow.c0c5dfac.3626a9b0103a55af.js",
  "/assets/gsap.min.js",
  "/assets/ScrollTrigger.min.js",
  "/assets/SplitText.min.js",
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain="monocrome.webflow.io"
      data-wf-page="69e9e66c20e59c8516b7fe05"
      data-wf-site="69e9e66b20e59c8516b7fe02"
      suppressHydrationWarning>
      <head>
        {/* crypto polyfill + Webflow `w-mod-js`/`w-mod-touch` flags — run before paint */}
        <script
          dangerouslySetInnerHTML={{ __html: wf.crypto + "\n" + wf.wmod }}
        />

        <link rel="preconnect" href="https://cdn.prod.website-files.com" />

        <link
          rel="stylesheet"
          href="/assets/monocrome.webflow.shared.8c6d9d2df.css"
          type="text/css"
        />

        {/* Webflow visibility gate: hides animated elements until w-mod-ix3 */}
        <style dangerouslySetInnerHTML={{ __html: wf.gate }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* Google fonts loader (Anton + Inter Tight) */}
        <script src="/assets/webfont.js" />
        <script dangerouslySetInnerHTML={{ __html: wf.webfontLoad }} />

        <link
          rel="icon"
          href="/assets/69f6f1c6533f27ed6a0c4ebb_Favicon_Black.png"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/assets/69f6f1f1da609da988276b1a_Favicon_32_whITE.png"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/assets/69f6f1c6ed718eea48959de2_Favicon_Black.png"
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/69f6f1fc5f43c471fcfbf17c_Favicon_Black.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/assets/69f6f1fca68c4720f34b648e_Favicon_Black.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/assets/69f6f1fc9c2ace5d235cb14c_Favicon_Black.png"
          type="image/png"
          sizes="512x512"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wf.jsonld) }}
        />

        <link rel="stylesheet" href="/assets/fonts.css" type="text/css" />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Site-wide smooth scrolling (Lenis). Owns window.lenis. */}
        <SmoothScroll />

        {/* Client controller: smart navbar hide/show + active-section dot.
            Reuses window.lenis; enhances the existing .navbar via the DOM. */}
        <SmartNavbar />

        {/* Pinned scroll animation for the #promotion section. */}
        <PromotionScroll />

        {BODY_SCRIPTS.map((src) => (
          <script key={src} src={src} />
        ))}
        {/* wf-visibility-failsafe (last inline script in the source body) */}
        <script dangerouslySetInnerHTML={{ __html: wf.failsafe }} />

        {/* Reveal the decorative cards behind the hero video, one by one, after
            the hero intro animation finishes. The Webflow/GSAP intro timeline
            runs ~0–8s from the start of the page; HERO_DONE_MS sits just past it.
            Tune HERO_DONE_MS / STAGGER_MS if the intro timing changes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var HERO_DONE_MS = 7000, STAGGER_MS = 500;
  function reveal(){
    var cards = document.querySelectorAll('.hero-back-card');
    cards.forEach(function(card, i){
      setTimeout(function(){ card.classList.add('is-revealed'); }, HERO_DONE_MS + i * STAGGER_MS);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal);
  } else {
    reveal();
  }
})();`,
          }}
        />
      </body>
    </html>
  );
}
