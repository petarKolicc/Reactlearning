const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type based on the file extension
  let contentType = 'text/html';
  let filePath = './index.html';

  if (req.url === '/index.js') {
    contentType = 'text/javascript';
    filePath = './index.js';
  } else if (req.url === '/index.css') {
    contentType = 'text/css';
    filePath = './index.css';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});