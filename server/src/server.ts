import express from 'express';

const app = express();

//Rotas: Endereço completo da requisição
//Recurso: Qual entidade

/*
Requisições HTTP
GET: Buscar informações
POST: Criar informações
PUT: Atualizar informações
DELETE: Remover informações
*/

app.get('/users', (request, response) => {
    console.log('aa');

    response.json([
        'Diego',
        'Cleiton',
        'Vickie'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Vickie',
        email: 'seila@gmail.com'
    };

    return response.json(user);
});

app.listen(3333);