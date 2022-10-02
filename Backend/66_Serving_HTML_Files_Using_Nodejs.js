const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync('L2_.Html');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listing on port 80")
});
