import express from 'express';
import cors from 'cors';
import path from 'path';

// Inicia o app do Express
const app = express();
const port = 5000;

// Habilitar CORS para todas as origens
app.use(cors());

// Carregar os dados do JSON de posts com o caminho correto
const postsData = require('../posts.json');

// Rota para retornar os posts
app.get('/api/posts', (req, res) => {
  res.json(postsData);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
