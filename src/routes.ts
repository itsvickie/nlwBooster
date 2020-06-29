import express from 'express';
import knex from './database/connection'

const routes = express.Router();

routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    // Serialize serve pra organizar os dados recebidos do BD
    const serializedItems = items.map(item => {
        return { 
            id: item.id,
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        };
    });
    return res.json(serializedItems);
});

routes.post('/points', async (req, res) => {
    const {
        name,
        email,
        whatsapp,
        latitude, 
        longitute,
        city,
        uf,
        items
    } = req.body;

    knex('points').insert({
        image: 'image-fake',
        name,
        email, 
        whatsapp,
        latitude,
        longitute,
        city, 
        uf,
        items
    });

    return res.json({ sucess: true });
});

export default routes;