const http = require('http');
const result = require('./script_part1.js');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    
  });

  server.listen(6000, () => {
    console.log("I'm listening");
  });