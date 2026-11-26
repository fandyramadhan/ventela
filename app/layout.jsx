import wf from "@/wf-raw.json";
import SmoothScroll from "./SmoothScroll";
import SmartNavbar from "./SmartNavbar";
import PromotionScroll from "./PromotionScroll";

const SITE_NAME = "Ventela";
const TITLE = "Ventela — Premium Vulcanized Shoes, Made in Bandung";
const DESCRIPTION =
  "Ventela makes premium vulcanized sneakers in Bandung, Indonesia. A local product with a 100% quality guarantee: 12oz canvas uppers, ultralite foam insoles and neat stitching. Wear local, walk louder, pay smarter.";
const OG_IMAGE = "/assets/ventela-assets/og-image.jpg";

// Set NEXT_PUBLIC_SITE_URL to the deployed URL so OG/Twitter image URLs are absolute.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Ventela",
    "sepatu lokal",
    "vulcanized shoes",
    "sneakers Bandung",
    "local product Indonesia",
    "Ventela V-22",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Ventela — Premium Vulcanized Shoes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport = {
  themeColor: "#012d80",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: "/",
  logo: "/assets/ventela-assets/logo-ventela.webp",
  description: DESCRIPTION,
  slogan: "Walk Louder",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Soekarno-Hatta No. 590",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40286",
    addressCountry: "ID",
  },
  email: "cs@ventela.co.id",
  telephone: "+62-811-2000-590",
  sameAs: [
    "https://instagram.com/ventela.indonesia",
    "https://tiktok.com/@ventela.indonesia",
  ],
};

const FAVICON = "/assets/ventela-assets/favicon";

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
          href="/assets/ventela.webflow.css"
          type="text/css"
        />

        {/* Webflow visibility gate: hides animated elements until w-mod-ix3 */}
        <style dangerouslySetInnerHTML={{ __html: wf.gate }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* Google fonts loader (Anton + Inter Tight) */}
        <script src="/assets/webfont.js" />
        <script dangerouslySetInnerHTML={{ __html: wf.webfontLoad }} />

        <link rel="icon" href={`${FAVICON}/favicon-32.png`} type="image/png" sizes="32x32" />
        <link rel="icon" href={`${FAVICON}/favicon-48.png`} type="image/png" sizes="48x48" />
        <link rel="icon" href={`${FAVICON}/favicon-192.png`} type="image/png" sizes="192x192" />
        <link rel="icon" href={`${FAVICON}/favicon-512.png`} type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href={`${FAVICON}/apple-touch-icon.png`} sizes="180x180" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
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
