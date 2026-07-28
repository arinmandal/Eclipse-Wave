#!/usr/bin/env node
/**
 * Eclipse Wave — Theme Generator
 * Run: node gen/generate.js
 * Outputs 4 complete theme JSON files into ./themes/
 */
const fs   = require('fs');
const path = require('path');

const palettes    = require('./palettes');
const buildColors = require('./buildColors');
const { buildTokenColors, buildSemanticTokenColors } = require('./buildTokens');

const OUT = path.join(__dirname, '..', 'themes');

function buildTheme(p) {
  return {
    type: p.type,
    name: p.name,
    colors: buildColors(p),
    tokenColors: buildTokenColors(p),
    semanticHighlighting: true,
    semanticTokenColors: buildSemanticTokenColors(p),
  };
}

const themes = [
  { palette: palettes.DARK,     file: 'Eclipse Wave-color-theme.json' },
  { palette: palettes.LIGHT,    file: 'Eclipse Wave Light-color-theme.json' },
  { palette: palettes.MIDNIGHT, file: 'Eclipse Wave Midnight-color-theme.json' },
  { palette: palettes.STORM,    file: 'Eclipse Wave Storm-color-theme.json' },
];

themes.forEach(({ palette, file }) => {
  const theme = buildTheme(palette);
  const outPath = path.join(OUT, file);
  fs.writeFileSync(outPath, JSON.stringify(theme, null, '\t'), 'utf8');
  console.log(`✓ Written: ${file}`);
});

console.log('\n🌌 Eclipse Wave themes generated successfully!');
