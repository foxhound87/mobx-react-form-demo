const http = require('http');
const path = require('path');
const fs = require('fs');

const index = path.resolve(__dirname, 'build', 'index.html');
const bundle = path.resolve(__dirname, 'build', 'main.js');

function send(res, err, contents) {
  if (!err) res.end(contents);
  else console.dir(err); // eslint-disable-line
}

function handler(req, res) {
  const file = path.basename(req.url);

  if (file === 'main.js') {
    fs.readFile(bundle, (err, contents) => send(res, err, contents));
    return;
  }

  fs.readFile(index, (err, contents) => send(res, err, contents));
}

http.createServer(handler).listen(3000);
