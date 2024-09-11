const http = require("http");

const server = http.createServer((req, res) => {
  res.end("{ asfd: sg, sdfds: 51 }");
});
server.listen(3000);
