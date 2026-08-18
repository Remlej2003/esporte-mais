/**
 * Meet hoeveel de pleisterkorrel een vlak vlak werkelijk moduleert.
 * Kijken is hier niet genoeg: een korrel van ±1 van 255 ziet er in een
 * schermafdruk hetzelfde uit als een korrel die er echt is.
 *
 * Gebruik: node scripts/meet-korrel.mjs <png> <x> <y> [grootte]
 */
import { spawn } from 'node:child_process';

const [png, x = '1250', y = '2100', n = '160'] = process.argv.slice(2);
if (!png) {
  console.error('gebruik: node scripts/meet-korrel.mjs <png> <x> <y> [grootte]');
  process.exit(1);
}

// Rauwe RGB uit een uitgesneden vlak halen via ffmpeg.
const ff = spawn('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-i', png,
  '-vf', `crop=${n}:${n}:${x}:${y}`, '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-',
]);

const brokken = [];
ff.stdout.on('data', (d) => brokken.push(d));
ff.on('close', () => {
  const buf = Buffer.concat(brokken);
  if (!buf.length) { console.error('geen pixels — klopt het uitsnijgebied?'); process.exit(1); }

  for (const [naam, offset] of [['R', 0], ['G', 1], ['B', 2]]) {
    const waarden = [];
    for (let i = offset; i < buf.length; i += 3) waarden.push(buf[i]);
    const uniek = new Set(waarden).size;
    const min = Math.min(...waarden);
    const max = Math.max(...waarden);
    const gem = waarden.reduce((a, b) => a + b, 0) / waarden.length;
    const sd = Math.sqrt(waarden.reduce((a, b) => a + (b - gem) ** 2, 0) / waarden.length);
    const oordeel = max - min >= 12 ? 'materiaal' : max - min >= 5 ? 'zwak' : 'VINKJE';
    console.log(
      `  ${naam}: spreiding ${String(max - min).padStart(3)} (${min}–${max})  ` +
      `sd ${sd.toFixed(2).padStart(5)}  unieke waarden ${String(uniek).padStart(3)}  → ${oordeel}`
    );
  }
});
