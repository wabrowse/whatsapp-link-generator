import { readFileSync, writeFileSync } from 'fs';

// Read the TSC-compiled ESM output
const esmSource = readFileSync('dist/index.js', 'utf8');

// Write as .mjs (ESM)
writeFileSync('dist/index.mjs', esmSource);

// Convert ESM to CJS
const cjsSource = esmSource
  .replace(/^export\s+\{([^}]+)\};?\s*$/m, (_, names) => {
    return names
      .split(',')
      .map((n) => n.trim())
      .filter(Boolean)
      .map((n) => `module.exports.${n} = ${n};`)
      .join('\n');
  })
  .replace(/^export\s+(function|const|let|var)\s+/gm, '$1 ');

writeFileSync('dist/index.js', cjsSource);

console.log('Built dist/index.js (CJS) and dist/index.mjs (ESM)');
