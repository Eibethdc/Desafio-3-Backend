import express from 'express';
import { addPost, getData } from '../models/queries.js';

const router = express.Router()

router.get('/posts', async (req, res) =>{
    const response = await getData();
    res.json(response)
})

router.post('/posts', async (req, res) =>{
    const { titulo, img, descripcion } = req.body;
    await addPost(titulo, img, descripcion)
    res.send('Posts agregado con exito')
})

export default router;