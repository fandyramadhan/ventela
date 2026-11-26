/* One-off: pull the exact inline head scripts / gate style / JSON-LD out of
   ../index.html so the Next layout reproduces them byte-for-byte. */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function between(startMarker, endMarker, from = 0) {
  const s = html.indexOf(startMarker, from);
  const e = html.indexOf(endMarker, s + startMarker.length);
  return html.slice(s + startMarker.length, e);
}

// crypto polyfill: the first <script> after the crypto comment
const crypto = between('<!-- crypto-randomuuid-polyfill -->\n', '</script>')
  .replace(/^\s*<script>\s*\n/, '')
  .trim();

// WebFont.load call
const wfStart = html.indexOf('WebFont.load(');
const webfontLoad = html.slice(wfStart, html.indexOf('</script>', wfStart)).trim();

// w-mod- (js/touch) class adder
const wmodStart = html.indexOf('" w-mod-"');
const wmodScriptStart = html.lastIndexOf('<script', wmodStart) ;
const wmod = html
  .slice(html.indexOf('>', wmodScriptStart) + 1, html.indexOf('</script>', wmodStart))
  .trim();

// visibility gate <style>
const gate = between('<style>', '</style>').trim();

// JSON-LD organization schema (fix asset paths)
const jsonldRaw = between('<script type="application/ld+json">', '</script>').trim();
const jsonld = JSON.parse(jsonldRaw);
const fixPaths = (obj) => {
  if (typeof obj === 'string') return obj.replace(/^assets\//, '/assets/');
  if (Array.isArray(obj)) return obj.map(fixPaths);
  if (obj && typeof obj === 'object') {
    const o = {};
    for (const k of Object.keys(obj)) o[k] = fixPaths(obj[k]);
    return o;
  }
  return obj;
};

// failsafe visibility script
const failsafe = between('<!-- wf-visibility-failsafe -->', '</script>')
  .replace(/^\s*<script>\s*\n/, '')
  .trim();

const out = {
  crypto,
  webfontLoad,
  wmod,
  gate,
  jsonld: fixPaths(jsonld),
  failsafe,
};

fs.writeFileSync(path.join(__dirname, 'wf-raw.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('crypto:', crypto.length, '| webfontLoad:', webfontLoad.length, '| wmod:', wmod.length);
console.log('gate:', gate.length, '| failsafe:', failsafe.length, '| jsonld keys:', Object.keys(out.jsonld).length);
