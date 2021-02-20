const http = require('http');
const fs = require('fs');

let express = require('express');
let app = express();
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('node express works on 3000');

});

app.get('/', function (req, res) {
    res.render('index.html');
});

// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     let body = null;
//     if (req.url === '/css/styles.css') {
//         body = fs.readFileSync('./public/css/style.css', 'utf8')
//     } else {
//         body = fs.readFileSync('./public/index.html', 'utf8');
//     }


//     res.end(body);
// });

// const port = process.env.PORT || 3001;

// server.listen(port);

// console.log(`Server started on port ${port}!`);

