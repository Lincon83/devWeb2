const http = require('http');

const hostname = '192.168.0.102';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
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