const http = require('http')
const hostname = '127.0.0.1';
const port = 30000;

const server = http.createServer(
    (req, res) => {
        console.log(req.headers);
        console.log("-------------------------------")
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('welcome to thbs');
    }
)

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});