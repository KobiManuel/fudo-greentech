const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "..", "public", "images", "inspirations");
const OUT = path.join(__dirname, "..", "public", "images", "crops");
fs.mkdirSync(OUT, { recursive: true });

const files = {
  aeren: "5b952898ab5fb9c67ab46ba2a50d319f.webp",
  markeio: "6edd94c0e7403233db176dfc318464e1.webp",
  zylo: "74cc0825a9eddacb476d43d1ffa6cf28.webp",
  ecosoft: "78db733d3f55e54258c10d6b9a145d53.webp",
  insomio: "e01113f98ae6dff9cd194457a0919b83.webp",
  dynamo: "original-41e09fc008b3514477fb22dba6063595.webp",
};

const crops = [
  // AEREN
  { src: "aeren", out: "hero-team-desk", left: 550, top: 600, width: 1400, height: 930 },

  // EcoSoft
  { src: "ecosoft", out: "orange-portrait", left: 140, top: 1060, width: 560, height: 470 },
  { src: "ecosoft", out: "dial-graphic", left: 1120, top: 1110, width: 380, height: 380 },
  { src: "ecosoft", out: "button-hand", left: 760, top: 600, width: 440, height: 470 },
  { src: "ecosoft", out: "video-quote-thumb", left: 1500, top: 730, width: 340, height: 130 },

  // Digital Dynamo (precise coords derived from native-scale read)
  { src: "dynamo", out: "founder-portrait", left: 295, top: 55, width: 175, height: 190 },
  { src: "dynamo", out: "analytics-overhead", left: 452, top: 42, width: 160, height: 155 },
  { src: "dynamo", out: "team-huddle", left: 238, top: 478, width: 388, height: 178 },
  { src: "dynamo", out: "stat-card-920", left: 33, top: 478, width: 198, height: 178 },
  { src: "dynamo", out: "lemon-texture", left: 450, top: 233, width: 165, height: 110 },

  // Zylo (precise coords derived from 1024px-wide native-ish read, scale x2)
  { src: "zylo", out: "blob-green-phone", left: 912, top: 314, width: 524, height: 680 },
  { src: "zylo", out: "blob-purple-chart", left: 1446, top: 314, width: 524, height: 376 },
  { src: "zylo", out: "blob-pink-shine", left: 912, top: 1036, width: 528, height: 424 },
  { src: "zylo", out: "blob-orange-man", left: 1466, top: 704, width: 504, height: 756 },
  { src: "zylo", out: "friends-yellow", left: 72, top: 1986, width: 938, height: 554 },
  { src: "zylo", out: "friends-purple", left: 1040, top: 1986, width: 936, height: 554 },

  // Insomio
  { src: "insomio", out: "swirl-banner", left: 0, top: 643, width: 1504, height: 730 },
  { src: "insomio", out: "case-cointash", left: 100, top: 2680, width: 650, height: 700 },
  { src: "insomio", out: "case-hempto", left: 760, top: 2680, width: 650, height: 700 },
  { src: "insomio", out: "case-tandore", left: 100, top: 3420, width: 650, height: 700 },
  { src: "insomio", out: "case-9kafi", left: 760, top: 3420, width: 650, height: 700 },

  // Markeio
  { src: "markeio", out: "team-photo-left", left: 0, top: 1352, width: 680, height: 430 },
  { src: "markeio", out: "team-photo-right", left: 760, top: 1352, width: 680, height: 430 },
  { src: "markeio", out: "abstract-glass-shapes", left: 0, top: 2443, width: 1440, height: 780 },
  { src: "markeio", out: "abstract-contour-swirl", left: 0, top: 3310, width: 1440, height: 780 },
  { src: "markeio", out: "metallic-cube-podium", left: 0, top: 5027, width: 1440, height: 790 },
];

(async () => {
  for (const c of crops) {
    const inputPath = path.join(SRC, files[c.src]);
    const meta = await sharp(inputPath).metadata();
    // clamp box to image bounds
    const left = Math.max(0, Math.min(c.left, meta.width - 1));
    const top = Math.max(0, Math.min(c.top, meta.height - 1));
    const width = Math.max(1, Math.min(c.width, meta.width - left));
    const height = Math.max(1, Math.min(c.height, meta.height - top));
    const outPath = path.join(OUT, `${c.out}.jpg`);
    await sharp(inputPath)
      .extract({ left, top, width, height })
      .resize({ width: Math.min(width, 1600), withoutEnlargement: true })
      .jpeg({ quality: 84 })
      .toFile(outPath);
    console.log("wrote", c.out, width, "x", height);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
