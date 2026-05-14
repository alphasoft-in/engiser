import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = 'public/images';

async function convertDir(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await convertDir(fullPath);
        } else if (entry.name.endsWith('.png')) {
            const outputPath = fullPath.replace('.png', '.avif');
            try {
                await sharp(fullPath)
                    .avif({ quality: 65 })
                    .toFile(outputPath);
                console.log(`Converted: ${fullPath} -> ${outputPath}`);
            } catch (err) {
                console.error(`Error converting ${fullPath}:`, err);
            }
        }
    }
}

// Also convert logos in root public
async function convertRootLogos() {
    const entries = await fs.readdir('public', { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('logo-') && entry.name.endsWith('.png')) {
            const fullPath = path.join('public', entry.name);
            const outputPath = fullPath.replace('.png', '.avif');
            try {
                await sharp(fullPath)
                    .avif({ quality: 65 })
                    .toFile(outputPath);
                console.log(`Converted: ${fullPath} -> ${outputPath}`);
            } catch (err) {
                console.error(`Error converting ${fullPath}:`, err);
            }
        }
    }
}

async function main() {
    await convertDir(inputDir);
    await convertRootLogos();
    console.log('All conversions finished!');
}

main();
