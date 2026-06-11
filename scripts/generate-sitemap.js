// Generates build/sitemap.xml listing every prerendered page of the demo
// site. The list of form demos is duplicated here (kept in sync with
// pages/form/@section/+onBeforePrerenderStart.ts and src/forms/seo.ts)
// to keep this script standalone and runnable from plain Node.
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://foxhound87.github.io/mobx-react-form-demo';

const STATIC_ROUTES = ['/', '/browse-demos/'];

const FORM_KEYS = [
  'login',
  'registerSimple',
  'validationDvr',
  'validationVjf',
  'validationAsync',
  'validationZod',
  'arrays',
  'nestedFields',
  'dynamicFieldsSelect',
  'interceptors',
  'observers',
  'composer',
  'bindingsDemo',
  'reactiveComputed',
  'crossValidation',
  'nestedComposition',
  'wizard',
  'reactSelect',
  'reactMultiSelect',
  'registerMaterial',
  'materialAdvanced',
  'companySimple',
  'companyWidgets',
  'headlessUI',
  'antd',
  'aria',
  'markdown',
  'fileUpload',
  'sortableList',
  'bubbleErrors',
];

const today = new Date().toISOString().slice(0, 10);
const homeModified = today;
const demoModified = today;

const urlEntry = (loc, lastmod, changefreq, priority) =>
  `  <url>\n` +
  `    <loc>${loc}</loc>\n` +
  `    <lastmod>${lastmod}</lastmod>\n` +
  `    <changefreq>${changefreq}</changefreq>\n` +
  `    <priority>${priority}</priority>\n` +
  `  </url>`;

const entries = [];
entries.push(urlEntry(`${SITE_URL}/`, homeModified, 'weekly', '1.0'));
entries.push(urlEntry(`${SITE_URL}/browse-demos/`, homeModified, 'weekly', '0.8'));
for (const key of FORM_KEYS) {
  entries.push(urlEntry(`${SITE_URL}/form/${key}/`, demoModified, 'monthly', '0.6'));
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries.join('\n') +
  `\n</urlset>\n`;

const outDir = path.resolve(__dirname, '..', 'build');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'sitemap.xml');
fs.writeFileSync(outFile, sitemap);
console.log(`Generated ${outFile} with ${entries.length} URLs`);
