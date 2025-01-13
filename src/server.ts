// src/server.ts
import express from 'express';
import path from 'path';

const app = express();
const port = 5000;

// Carregar os dados JSON
const animesData = require('./animes.json');
const episodesData = require('./episodes.json');

// Rota para retornar os animes
app.get('/api/animes', (req, res) => {
  res.json(animesData);
});

// Rota para retornar os episódios
app.get('/api/episodes', (req, res) => {
  res.json(episodesData);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
