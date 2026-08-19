const sharp = require("sharp");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ICON = path.join(ROOT, "public", "images", "fudo-icon.png");
const APP = path.join(ROOT, "app");

const BRAND_GREEN = "#80C73E";
const CREAM = "#F7F4EA";
const INK = "#03110C";

function bannerSvg(w, h) {
  const cx = w / 2;
  const iconSize = Math.round(h * 0.34);
  const gap = Math.round(iconSize * 0.28);
  const wordmarkSize = Math.round(h * 0.155);
  const taglineSize = Math.round(h * 0.045);

  // Rough width estimate of "Füdo Greentech" at this weight/size to center the lockup as a unit.
  const wordmarkWidth = wordmarkSize * 5.3;
  const lockupWidth = iconSize + gap + wordmarkWidth;
  const lockupLeft = cx - lockupWidth / 2;
  const iconX = lockupLeft;
  const textX = lockupLeft + iconSize + gap;
  const lockupCenterY = h * 0.44;

  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="42%" r="60%">
        <stop offset="0%" stop-color="${BRAND_GREEN}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${BRAND_GREEN}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="${w}" y2="${h}" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#04160F" />
        <stop offset="100%" stop-color="${INK}" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)" />
    <circle cx="${cx}" cy="${lockupCenterY}" r="${h * 0.55}" fill="url(#glow)" />
    <text
      x="${textX}"
      y="${lockupCenterY - wordmarkSize * 0.08}"
      font-family="Arial, sans-serif"
      font-weight="700"
      font-size="${wordmarkSize}"
      fill="${BRAND_GREEN}"
      dominant-baseline="alphabetic"
    >Füdo</text>
    <text
      x="${textX}"
      y="${lockupCenterY + wordmarkSize * 0.95}"
      font-family="Arial, sans-serif"
      font-weight="700"
      font-size="${wordmarkSize}"
      fill="${CREAM}"
      dominant-baseline="alphabetic"
    >Greentech</text>
    <text
      x="${cx}"
      y="${h * 0.84}"
      text-anchor="middle"
      font-family="Arial, sans-serif"
      font-weight="600"
      font-size="${taglineSize}"
      letter-spacing="${taglineSize * 0.25}"
      fill="${CREAM}"
      fill-opacity="0.6"
    >MARKETING · BRANDING · SOFTWARE · GO-TO-MARKET</text>
  </svg>`;
}

async function buildBanner(w, h, outPath) {
  const svg = Buffer.from(bannerSvg(w, h));
  const iconSize = Math.round(h * 0.34);
  const gap = Math.round(iconSize * 0.28);
  const wordmarkSize = Math.round(h * 0.155);
  const wordmarkWidth = wordmarkSize * 5.3;
  const lockupWidth = iconSize + gap + wordmarkWidth;
  const lockupLeft = w / 2 - lockupWidth / 2;
  const lockupCenterY = h * 0.44;

  const icon = await sharp(ICON)
    .resize({ height: iconSize })
    .toBuffer();
  const iconMeta = await sharp(icon).metadata();

  await sharp(svg)
    .composite([
      {
        input: icon,
        left: Math.round(lockupLeft),
        top: Math.round(lockupCenterY - iconMeta.height / 2 - iconMeta.height * 0.06),
      },
    ])
    .png()
    .toFile(outPath);
  console.log("wrote", outPath);
}

async function buildSquareIcon(size, outPath, { padded = false } = {}) {
  const bg = padded ? Math.round(size * 0.16) : Math.round(size * 0.08);
  const inner = size - bg * 2;

  await sharp({
    create: { width: size, height: size, channels: 4, background: INK },
  })
    .composite([
      {
        input: await sharp(ICON).resize({ width: inner, height: inner, fit: "contain" }).toBuffer(),
        left: bg,
        top: bg,
      },
    ])
    .png()
    .toFile(outPath);
  console.log("wrote", outPath);
}

(async () => {
  await buildBanner(1200, 630, path.join(APP, "opengraph-image.png"));
  await buildBanner(1200, 630, path.join(APP, "twitter-image.png"));
  await buildSquareIcon(512, path.join(APP, "icon.png"));
  await buildSquareIcon(180, path.join(APP, "apple-icon.png"), { padded: true });

  // favicon.ico from a small square render
  const faviconPng = await sharp({
    create: { width: 64, height: 64, channels: 4, background: INK },
  })
    .composite([
      {
        input: await sharp(ICON).resize({ width: 52, height: 52, fit: "contain" }).toBuffer(),
        left: 6,
        top: 6,
      },
    ])
    .png()
    .toBuffer();

  const { default: toIco } = require("png-to-ico");
  const ico = await toIco(faviconPng);
  require("fs").writeFileSync(path.join(APP, "favicon.ico"), ico);
  console.log("wrote", path.join(APP, "favicon.ico"));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
