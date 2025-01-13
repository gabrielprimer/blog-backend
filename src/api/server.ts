// src/api/server.ts
import express from 'express';
import path from 'path';

// Criação da instância do express
const app = express();
const port = 5000;

// Carregar os dados JSON com caminho correto
const animesData = require('../animes.json'); // Corrigir o caminho
const episodesData = require('../episodes.json'); // Corrigir o caminho

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
