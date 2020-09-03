const http = require('http');
const fs = require('fs');
const express = require('express');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req, res) => {
    fs.open('teste.txt', 'w', (erro, data) => {
        if (erro) throw erro;
        console.log('Arquivo criado com sucesso!');
    })

    fs.appendFile('teste.txt', 'Olá mundo!', (erro, data) => {
        if (erro) throw erro;
        console.log('Arquivo salvo com sucesso!')
    })

    fs.readFile('index.html', (erro, data) => {
        if (erro) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Pagina não Encontrada!');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }


    })
});

server.listen(port, hostname, () => console.log(`Servidor rodando em 
http://${hostname}:${port}`));