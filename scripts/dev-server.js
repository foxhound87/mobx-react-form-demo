const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 8888;
const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const INDEX_FILE = path.join(BUILD_DIR, 'index.html');

const MIME = {
  '.js': 'application/javascript',
  '.html': 'text/html',
  '.css': 'text/css',
  '.map': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0].split('#')[0];
  const filePath = path.join(BUILD_DIR, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (!err) {
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
      res.end(data);
      return;
    }

    fs.readFile(INDEX_FILE, (err2, data2) => {
      res.writeHead(err2 ? 404 : 200, { 'Content-Type': 'text/html' });
      res.end(data2 || '');
    });
  });
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
