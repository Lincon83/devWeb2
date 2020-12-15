// URL > Uniforms Resource Locator
// URN > Uniforms Resource Name
// URI > Uniforms Resource Identifier
// CRUD = Create, Read, Update, Delete

const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const hostname = "localhost";
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.end(JSON.stringify({
        message: "Acessei o / com o Verbo GET"
    }))
 });

 app.post('/', (request, response) => {
    console.log(request.body())
    response.end(JSON.stringify({
        message: "Acessei o / com o Verbo POST"
    }))
 });

 app.delete('/', (request, response) => {
    response.end(JSON.stringify({
        message: "Acessei o / com o Verbo DELETE"
    }))
 });

 app.patch('/', (request, response) => {
    response.end(JSON.stringify({
        message: "Acessei o / com o Verbo PACH"
    }))
 });

app.listen(port, hostname, () => console.log(`Servidor rodando em http://${hostname}:${port}`));