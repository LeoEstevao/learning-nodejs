// Criando um servidor usando httpServer do nodejs

// Módulo nativo do node
const httpServer = require("http");

// Require, Response
httpServer.createServer((req, res)=> {
    // ps: Para renderizar html, é necessário um TEMPLATE ENGINE
    res.end('Essa é a resposta da requisição');
}).listen(8080);

console.log('Servidor rodando. Para atualizar, deve reiniciar manualmente');