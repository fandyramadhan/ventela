# Monocrome — Next.js

Konversi dari export Webflow (`../index.html`) ke **Next.js (App Router)** dengan
tampilan **& animasi sama persis** dengan aslinya: CSS Webflow asli + runtime
asli (jQuery + Webflow-IX + GSAP/ScrollTrigger/SplitText) dipertahankan, dan
markup di-author sebagai **komponen React** sungguhan.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000 (otomatis pindah port jika 3000 dipakai)
# produksi:
npm run build && npm run start
```

## Cara kerja (penting)

Runtime Webflow “mengoperasi” DOM saat load: **SplitText** memecah judul jadi
span per-karakter, **GSAP/ScrollTrigger** menulis ulang inline style, dll.
Operasi DOM ini **tidak kompatibel dengan React hydration** — kalau React
meng-hydrate markup-nya, terjadi mismatch (React error #418) lalu React
me-render ulang dan “berkelahi” dengan engine sehingga animasi rusak.

Solusinya:

1. Section di-author sebagai komponen React (`components/*.jsx`).
2. `gen-static.mjs` (dijalankan otomatis oleh `prebuild`) merender komponen itu
   ke string HTML statis lewat `react-dom/server` → `app/_content.js`.
3. `app/page.jsx` menyuntikkan HTML itu via `dangerouslySetInnerHTML`. React
   memperlakukan subtree sebagai **opaque** (tidak pernah me-reconcile isinya),
   jadi engine Webflow bebas menganimasi → hasilnya identik dengan aslinya.
4. Script runtime dirender di akhir `<body>` pada **HTML awal** (lihat
   `app/layout.jsx`), bukan dari `useEffect`. Ini wajib: animasi template
   ter-*gate* pada event `load`, jadi engine harus jalan **saat load**.

Terverifikasi identik dengan aslinya: `html.w-mod-ix3`, **69 gsap tween / 32
ScrollTrigger** (sama), font `wf-*-active` aktif, 0 React error, 0 request gagal.

## Struktur

```
app/
  layout.jsx     <head> (favicon, JSON-LD, visibility-gate <style>, script inline
                 crypto+w-mod, WebFont) + link CSS; <body> + script runtime asli
  page.jsx       menyuntikkan _content.js (HTML hasil render komponen)
  _content.js    AUTO-GENERATED (jangan diedit tangan)
components/
  Navbar, Preloader, Hero, About, Services, Work, Team,
  Testimonials, Faq, Footer          -> komponen JSX hasil konversi HTML
public/assets/   seluruh aset asli (CSS Webflow, fonts.css + woff2, gambar, webp,
                 mp4/webm, svg, runtime Webflow/GSAP/jQuery)
wf-raw.json      potongan inline asli (crypto, w-mod, WebFont, gate CSS, failsafe,
                 JSON-LD) yang diimpor layout

# toolchain (one-off generators):
extract.cjs      index.html  -> wf-raw.json
convert.cjs      index.html  -> components/*.jsx   (htmltojsx)
static-entry.jsx + gen-static.mjs   components/*.jsx -> app/_content.js (esbuild)
```

Kalau mengubah komponen, jalankan ulang generator:

```bash
node gen-static.mjs            # regen app/_content.js (atau cukup `npm run build`)
```

Kalau `../index.html` berubah:

```bash
node extract.cjs && node convert.cjs && node gen-static.mjs
```

## Catatan

- **Scope: homepage saja.** Link ke `project/*`, `changelog`, `license`,
  `style-guide` masih menunjuk path Webflow lama (belum dibuat sebagai route).
  Tidak memengaruhi tampilan homepage.
