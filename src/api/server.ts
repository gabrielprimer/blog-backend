import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 5000;

// Habilitar CORS para todas as origens
app.use(cors());

// Carregar os dados JSON com caminho correto
const animesData = require('../animes.json');
const episodesData = require('../episodes.json');

// Rota para retornar os animes
app.get('/api/animes', (req, res) => {
  res.json(animesData);
});

// Rota para retornar os episódios
app.get('/api/episodes', (req, res) => {
  res.json(episodesData);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
