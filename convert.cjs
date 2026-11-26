/* One-off: convert sections of ../index.html into React components. */
const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

const SRC = path.join(__dirname, '..', 'index.html');
const OUT = path.join(__dirname, 'components');

const html = fs.readFileSync(SRC, 'utf8');
const lines = html.split('\n');

// 1-indexed inclusive line ranges of each top-level section in <body>.
const SECTIONS = [
  { name: 'Navbar', start: 294, end: 380 },
  { name: 'Preloader', start: 381, end: 395 },
  { name: 'Hero', start: 396, end: 751 },
  { name: 'About', start: 752, end: 808 },
  { name: 'Services', start: 809, end: 912 },
  { name: 'Work', start: 913, end: 1104 },
  { name: 'Team', start: 1105, end: 1272 },
  { name: 'Testimonials', start: 1273, end: 1615 },
  { name: 'Faq', start: 1616, end: 1784 },
  { name: 'Footer', start: 1785, end: 1946 },
];

const converter = new HTMLtoJSX({ createClass: false });

function fixPaths(jsx) {
  // All body asset references begin with assets/69... -> make them absolute.
  return jsx.replace(/assets\/69/g, '/assets/69');
}

function postProcess(jsx) {
  jsx = fixPaths(jsx);
  // htmltojsx leaves some boolean attrs as ="" — normalize the ones present.
  jsx = jsx
    .replace(/\sautoplay=""/g, ' autoPlay')
    .replace(/\sloop=""/g, ' loop')
    .replace(/\smuted=""/g, ' muted')
    .replace(/\splaysinline=""/g, ' playsInline')
    .replace(/\srequired=""/g, ' required')
    .replace(/\shidden=""/g, ' hidden')
    // htmltojsx turns empty string attrs (alt="", href="") into bare booleans
    // (`alt`, `href` => true). Restore them to empty strings.
    .replace(/ alt(?=[ />])/g, ' alt=""')
    .replace(/ href(?=[ />])/g, ' href=""');
  return jsx.trim();
}

for (const s of SECTIONS) {
  let chunk = lines.slice(s.start - 1, s.end).join('\n');
  // Drop <noscript> fallbacks (only relevant when JS is disabled; they embed
  // raw CSS that the converter would mangle).
  chunk = chunk.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
  let jsx = converter.convert(chunk);
  jsx = postProcess(jsx);

  const file = `export default function ${s.name}() {\n  return (\n${jsx
    .split('\n')
    .map((l) => '    ' + l)
    .join('\n')}\n  );\n}\n`;

  fs.writeFileSync(path.join(OUT, `${s.name}.jsx`), file, 'utf8');
  console.log(`wrote ${s.name}.jsx (${jsx.length} chars)`);
}
console.log('done');
