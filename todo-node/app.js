require('dotenv').config();
const http = require('http')
const hostname = '127.0.0.1';
const port = 30000;

console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);

const server = http.createServer(
    (req, res) => {
        console.log(req.headers);
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.setHeader('thbs-type', 'angular')
        res.end('welcome to thbs');
    }
)

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});