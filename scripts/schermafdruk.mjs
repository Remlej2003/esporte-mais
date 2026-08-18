/**
 * Volledige-pagina-opnames via het Chrome DevTools-protocol.
 * Gebruik: node scripts/schermafdruk.mjs <url> <uitvoermap> [breedte:hoogte:naam ...]
 */
import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [url, outDir, ...specs] = process.argv.slice(2);
const targets = (specs.length ? specs : ['1440:900:desktop', '390:844:mobile']).map((s) => {
  const [w, h, naam] = s.split(':');
  return { w: +w, h: +h, naam };
});

const profiel = mkdtempSync(join(tmpdir(), 'chrome-shot-'));
const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio',
  '--no-first-run', '--no-default-browser-check', '--disable-extensions',
  `--user-data-dir=${profiel}`, '--remote-debugging-port=9222', 'about:blank',
], { stdio: 'ignore', detached: false });

const wacht = (ms) => new Promise((r) => setTimeout(r, ms));

async function versie() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch('http://127.0.0.1:9222/json/version');
      if (r.ok) return r.json();
    } catch { /* nog niet op */ }
    await wacht(250);
  }
  throw new Error('Chrome kwam niet omhoog op poort 9222');
}

class Sessie {
  constructor(ws) { this.ws = ws; this.id = 0; this.open = new Map(); this.gebeurtenissen = new Map();
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      if (m.id && this.open.has(m.id)) {
        const { res, rej } = this.open.get(m.id); this.open.delete(m.id);
        m.error ? rej(new Error(m.error.message)) : res(m.result);
      } else if (m.method) {
        const h = this.gebeurtenissen.get(m.method);
        if (h) { this.gebeurtenissen.delete(m.method); h(m.params); }
      }
    });
  }
  stuur(method, params = {}) {
    const id = ++this.id;
    return new Promise((res, rej) => {
      this.open.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  ooit(method) { return new Promise((res) => this.gebeurtenissen.set(method, res)); }
}

try {
  await versie();
  await mkdir(outDir, { recursive: true });

  for (const { w, h, naam } of targets) {
    const doel = await (await fetch(`http://127.0.0.1:9222/json/new?about:blank`, { method: 'PUT' })).json();
    const ws = new WebSocket(doel.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener('open', r, { once: true }));
    const s = new Sessie(ws);

    await s.stuur('Page.enable');
    await s.stuur('Emulation.setDeviceMetricsOverride', {
      width: w, height: h, deviceScaleFactor: 1, mobile: w < 700,
    });
    const geladen = s.ooit('Page.loadEventFired');
    await s.stuur('Page.navigate', { url });
    await geladen;
    // Een volledige-paginaopname rendert position:sticky op de scrollpositie,
    // waardoor de balk midden in de tekst belandt. Dat is geen fout in de
    // pagina maar wel ongeldig bewijs, dus we halen hem uit de flow.
    // De dev-toolbar hoort al helemaal niet in een beoordeling.
    await s.stuur('Runtime.evaluate', {
      expression: `(() => {
        const st = document.createElement('style');
        st.textContent = '.kop{position:static !important}astro-dev-toolbar{display:none !important}';
        document.head.appendChild(st);
      })()`,
    });
    // Letters, afbeeldingen en de waarnemer laten landen voor we vastleggen.
    await s.stuur('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
    await wacht(1200);
    await s.stuur('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)' });
    await wacht(900);
    await s.stuur('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await wacht(500);

    const { data } = await s.stuur('Page.captureScreenshot', {
      format: 'png', captureBeyondViewport: true, fromSurface: true, optimizeForSpeed: false,
    });
    const pad = join(outDir, `${naam}.png`);
    await writeFile(pad, Buffer.from(data, 'base64'));
    console.log(`  ${pad}  (${w}px breed)`);
    ws.close();
    await fetch(`http://127.0.0.1:9222/json/close/${doel.id}`);
  }
} finally {
  chrome.kill('SIGKILL');
  await rm(profiel, { recursive: true, force: true }).catch(() => {});
}
