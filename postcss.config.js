const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    postcssUrl('inline'),
  ]
};
