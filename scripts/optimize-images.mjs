// Optimize portrait into WebP variants + generate apple-touch icon PNG
import sharp from "sharp";
import fs from "fs";

const src = "/home/z/my-project/public/dp.png";

async function run() {
  // WebP optimized full-res (for hero portrait)
  await sharp(src)
    .resize(698, 698)
    .webp({ quality: 82, effort: 6 })
    .toFile("/home/z/my-project/public/dp.webp");

  // Apple touch icon: ink background with monogram
  const size = 180;
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="40" fill="#181818"/>
    <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
      font-family="Manrope, Arial, sans-serif" font-weight="800" font-size="72" fill="#F7F7F5">AH</text>
    <circle cx="132" cy="118" r="7" fill="#986D4E"/>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile("/home/z/my-project/public/apple-touch-icon.png");

  const pngKB = (fs.statSync(src).size / 1024).toFixed(0);
  const webpKB = (fs.statSync("/home/z/my-project/public/dp.webp").size / 1024).toFixed(0);
  console.log(`dp.png ${pngKB}KB -> dp.webp ${webpKB}KB`);
}

run().catch((e) => { console.error(e); process.exit(1); });
