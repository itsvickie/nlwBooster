import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('aa');

    response.json([
        'Diego',
        'Cleiton',
        'Vickie'
    ]);
});

app.listen(3333);