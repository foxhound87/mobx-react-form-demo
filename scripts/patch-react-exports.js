const fs = require('fs');
const path = require('path');

const reactPkgPath = path.resolve(__dirname, '..', 'node_modules', 'react', 'package.json');

if (!fs.existsSync(reactPkgPath)) {
  console.error('✗ React package.json not found at', reactPkgPath);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(reactPkgPath, 'utf-8'));

if (typeof pkg.exports !== 'object' || pkg.exports === null) {
  console.log('⚠ React exports field is not an object, skipping patch');
  process.exit(0);
}

// Add the .js variants that Vite's SSR build generates
pkg.exports['./jsx-runtime.js'] = pkg.exports['./jsx-runtime.js'] || './jsx-runtime.js';
pkg.exports['./jsx-dev-runtime.js'] = pkg.exports['./jsx-dev-runtime.js'] || './jsx-dev-runtime.js';

fs.writeFileSync(reactPkgPath, JSON.stringify(pkg, null, 2));
console.log('✓ Patched React exports field (added ./jsx-runtime.js and ./jsx-dev-runtime.js)');
