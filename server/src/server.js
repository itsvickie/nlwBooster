"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//Rotas: Endereço completo da requisição
//Recurso: Qual entidade
/*
Requisições HTTP
GET: Buscar informações
POST: Criar informações
PUT: Atualizar informações
DELETE: Remover informações
*/
app.get('/users', function (request, response) {
    console.log('aa');
    response.json([
        'Diego',
        'Cleiton',
        'Vickie'
    ]);
});
app.post('/users', function (request, response) {
    var user = {
        name: 'Vickie',
        email: 'seila@gmail.com'
    };
    return response.json(user);
});
app.listen(3333);
