const http = require('http');

const hostname = '127.0.0.1';

const port = 2000;

const server = http.createServer(
    
    function(req, res){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('Ola Mundo...');
    }

);

server.listen(port, hostname,
    function(){
        console.log('O servidor esta funcionando de boas...');
    }
);