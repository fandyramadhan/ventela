/* `npm run dev` entry point.

   Runs two things together so that editing components/*.jsx is reflected
   immediately, with no manual build step:
     1. gen-static.mjs --watch  — regenerates app/_content.js on every change
     2. next dev                — serves the app (recompiles when _content.js changes)

   The initial generation runs synchronously first so Next never compiles the
   page before app/_content.js exists. */
import { spawn, spawnSync } from 'child_process';

// 1. Initial one-shot generation (blocking) so app/_content.js exists up front.
const init = spawnSync('node', ['gen-static.mjs'], { stdio: 'inherit' });
if (init.status !== 0) process.exit(init.status ?? 1);

// 2. Long-running watcher + dev server.
const watcher = spawn('node', ['gen-static.mjs', '--watch'], { stdio: 'inherit' });
const next = spawn('npx', ['next', 'dev'], { stdio: 'inherit' });

const shutdown = () => {
  watcher.kill();
  next.kill();
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// If the dev server exits, stop the watcher and mirror its exit code.
next.on('exit', (code) => {
  watcher.kill();
  process.exit(code ?? 0);
});
