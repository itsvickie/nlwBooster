import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// /* 
//     request: obter dados da requisição; ( cliente -> servidor )
//     response: devolver uma resposta; ( servidor -> cliente )
// */

// // HTTP/ROTAS: DADOS NO BACK-END
// // GET: Buscar
// // POST: Criar 
// // PUT: Atualizar
// // DELETE: Deletar

// // POST http://localhost:3333/users = Criar um usuário
// // GET http://localhost:3333/users = Listar usuários
// // GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5

// // Request.param ou res.param é o paramêtro que vem na própria rota
// // Query.param são paramêtros opcionais que vem na própria rota
// // 

// const users = [
//     'Diego',
//     'Robson',
//     'Fernando'
// ];

// app.get('/users', (req, res) => {
//     const search = String(req.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return res.json(filteredUsers);
// });

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id);

//     const user = users[id];

//     return res.json(user);
// });

// app.post('/users', (req, res) => {
//     const data = req.body;

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return res.json(user);
// });