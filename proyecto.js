let http = require('http');
let indexFile;
const fs = require('fs').promises;
const express = require("express");
const router = express.Router();

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

router.get("/", (req,res)=>{
    res.render("/index.html");
});

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => {
        console.error('Could not read index.html file:', {err});
        process.exit(1);
    });