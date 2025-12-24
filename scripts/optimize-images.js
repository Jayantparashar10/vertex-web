const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const inputDir = './public/images/raw';
const outputDir = './public/images';

// Ensure directories exist
if (!fs.existsSync(inputDir)) {
  console.error(`Error: Input directory ${inputDir} does not exist. Please create it and add your source images there.`);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process images
console.log('🖼️  Starting image optimization...');

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

    sharp(inputFile)
      .resize(2400, null, { 
        withoutEnlargement: true,
        fit: 'inside' 
      })
      .webp({ 
        quality: 85,
        effort: 6 // Higher effort = better compression but slower
      })
      .toFile(outputFile)
      .then(info => {
        console.log(`✅ Optimized: ${file} -> ${path.basename(outputFile)} (${(info.size / 1024).toFixed(2)} KB)`);
      })
      .catch(err => {
        console.error(`❌ Error processing ${file}:`, err);
      });
  }
});
