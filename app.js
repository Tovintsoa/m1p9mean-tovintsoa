const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const port = process.env.PORT || 3000;

const root = path.join(__dirname, 'front');

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'front/src/index.html'))
});
app.listen(port, () => {
    console.log('server started');
})
/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World baby </h1>');
});

server.listen(port,'0.0.0.0',() => {
    console.log(`Server running at port `+port);
});*/



console.log('Listening on port '+ port);
