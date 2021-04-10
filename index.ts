import http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
const server = http.createServer((req: any, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');//Content-Type 内容类型
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

