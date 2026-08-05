const { chromium } = require("playwright");

const url = process.argv[2] || "http://localhost:3000";
const out = process.argv[3] || "scripts/shot.png";
const fullPage = process.argv[4] !== "false";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(300);

  if (fullPage) {
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(60);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
  }

  await page.screenshot({ path: out, fullPage });
  await browser.close();
  console.log("saved", out);
  if (errors.length) {
    console.log("CONSOLE ERRORS:");
    errors.forEach((e) => console.log(" -", e));
  } else {
    console.log("no console errors");
  }
})();
