const fs = require('fs');
const path = require('path');

// Assets in assets.json are relative (e.g. "assets/entries/entry.js")
// but the site is deployed at a subpath, so prefix with /mobx-react-form-demo/
const BASE_PATH = '/mobx-react-form-demo';

const assets = JSON.parse(fs.readFileSync('build/assets.json', 'utf-8'));

// Collect CSS and JS entry files
const cssFiles = [];
const jsFiles = [];

for (const [key, value] of Object.entries(assets)) {
  if (key.endsWith('.css')) {
    cssFiles.push(value.file);
  }
  if (value.isEntry && key.includes('runtime-server-routing')) {
    // Vike entry - put first
    jsFiles.unshift(value.file);
  } else if (value.isEntry) {
    jsFiles.push(value.file);
  }
}

const assetUrl = (p) => `${BASE_PATH}/${p}`;

const cssLinks = cssFiles.map(f => `<link rel="stylesheet" href="${assetUrl(f)}">`).join('\n    ');
const jsScripts = jsFiles.map(f => `<script type="module" src="${assetUrl(f)}"></script>`).join('\n    ');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>MobX React Form Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" as="style">
    ${cssLinks}
  </head>
  <body>
    <div id="app"></div>
    <script id="vike_globalContext" type="application/json">{}</script>
    <script id="vike_pageContext" type="application/json">{"pageId":"/pages","routeParams":{}}</script>
    ${jsScripts}
  </body>
</html>`;

fs.writeFileSync('build/index.html', html);
console.log('Generated build/index.html with', cssFiles.length, 'CSS and', jsFiles.length, 'JS entries');

// Also generate robots.txt and sitemap.xml at the build root so they
// end up at the site root when the build dir is published to GitHub
// Pages. These are small and idempotent, so we re-run them every time.
require('./generate-robots.js');
require('./generate-sitemap.js');
