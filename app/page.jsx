import content from './_content';

/**
 * The page is authored as real JSX components (components/*.jsx). They are
 * rendered to a static HTML string (app/_content.js, produced by gen-static.mjs)
 * and handed to the original Webflow engine
 * (jQuery/Webflow-IX/GSAP/ScrollTrigger/SplitText), which takes full ownership
 * of this DOM at runtime — SplitText restructures headings, GSAP rewrites inline
 * styles, etc.
 *
 * That DOM surgery is incompatible with React hydration (it forces a client
 * re-render that fights the engine, breaking the animations). Injecting the
 * markup via dangerouslySetInnerHTML makes React treat the subtree as opaque:
 * it never reconciles the internals, so the engine animates freely and the
 * result is byte-for-byte the original.
 *
 * Why a generated _content.js instead of rendering here? Next.js forbids
 * importing `react-dom/server` inside a Server Component, so renderToStaticMarkup
 * must run in a plain Node process. `npm run dev` regenerates this file on every
 * component change (see dev.mjs / gen-static.mjs --watch), so just edit the
 * components — no manual build step.
 */
export default function Home() {
  return (
    <div
      className="page-wrap"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
