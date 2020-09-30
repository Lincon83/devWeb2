const http = require('http');

const hostname = 'localhost'; 

const port = 3000;

const title = "Página com NUDES JS";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
            </head>
            <body>
                <h1>Olá mundo!!!</h1>
            </body>
        </html>
    ');
});

