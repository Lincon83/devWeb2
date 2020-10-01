const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

//const app = require('../src/app.js');
//const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Entrega do Projeto Prático da C1</title>
        <link rel="stilesheet" href="css/style.css">
    </head>
    <body>
        <h1> Hello World </h1>
        <h2> Ola mundo </h2>
        <h3> Tchau mundo... </3>
        
    </body>
    </html>

    `)
});

server.listen(port, hostname, () => {
    console.log(`Servidor esta rodando em http://${hostname}:${port}`);
})