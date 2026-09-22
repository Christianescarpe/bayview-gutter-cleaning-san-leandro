const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = 'D:\\images\\gutter cleaning';
const DEST_DIR = path.join(__dirname, '..', 'public', 'images', 'gutter-cleaning');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(SOURCE_DIR);
  console.log(`Found ${files.length} images in ${SOURCE_DIR}`);

  const manifest = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    // simplify filename if it has date stamps
    const cleanName = baseName.replace(/-\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-utc/i, '') + '.webp';
    const srcPath = path.join(SOURCE_DIR, file);
    const destPath = path.join(DEST_DIR, cleanName);

    try {
      const metadata = await sharp(srcPath).metadata();
      const width = Math.min(metadata.width || 1600, 1600);

      await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(destPath);

      const destStats = fs.statSync(destPath);
      const origStats = fs.statSync(srcPath);

      manifest.push({
        original: file,
        filename: cleanName,
        url: `/images/gutter-cleaning/${cleanName}`,
        width,
        origSizeKB: Math.round(origStats.size / 1024),
        optSizeKB: Math.round(destStats.size / 1024),
      });

      console.log(`Optimized: ${file} (${Math.round(origStats.size / 1024)} KB) -> ${cleanName} (${Math.round(destStats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'images-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Successfully processed ${manifest.length} images and wrote manifest.`);
}

processImages().catch(console.error);
