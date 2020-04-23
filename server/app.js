const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.url);
  res.end('res');
});

server.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log('启动成功');
});
