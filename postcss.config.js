const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

module.exports = {
  plugins: [
    postcssImport(),
    postcssUrl('inline'),
  ]
};
