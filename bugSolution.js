const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  let bodySize = 0;
  req.on('data', chunk => {
    bodySize += chunk.length;  // Track the request body size
    if (bodySize > 1e6) { // Example: 1MB max size
      req.destroy(); // Abort the request
      res.writeHead(413, {'Content-Type': 'text/plain'}).end('Request too large');
      return;
    }
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('OK');
  });
});

server.listen(3000);