import express from 'express';

const app = express();

/* 
    request: obter dados da requisição; ( cliente -> servidor )
    response: devolver uma resposta; ( servidor -> cliente )
*/

// HTTP/ROTAS: DADOS NO BACK-END
// GET: Buscar
// POST: Criar 
// PUT: Atualizar
// DELETE: Deletar

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5


app.get('/users', (req, res) => {
    res.json([
        'A',
        'B',
        'C',
        'D',
        'E'
    ]);
});

app.post('/users', (req, res) => {
    const user = {
        name: 'Vickie',
        email: 'fodase@fodase.com'
    };

    return res.json(user);
});

app.listen(3333);