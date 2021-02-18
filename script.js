const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    let body = null;
    if (req.url === '/css/styles.css') {
        body = fs.readFileSync('./public/css/styles.css', 'utf8')
    } else {
        body = fs.readFileSync('./public/index.html', 'utf8');
    }


    res.end(body);
});
const port = process.env.PORT || 3001;

server.listen(port);

console.log(`Server started on port ${port}!`);