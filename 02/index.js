const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogadorAtual = 0;

app.get('', (req, res) => {
  let nomeDoJogador = jogadores[indiceJogadorAtual];
  console.log(indiceJogadorAtual)
  res.send(`É a vez de ${nomeDoJogador}`);
  indiceJogadorAtual = (indiceJogadorAtual + 1) % jogadores.length;
})

app.get('/remover', (req, res) => {
  const indice = Number(req.query.indice)
  if (isNaN(indice) || indice < 0 || indice >= jogadores.length) {
    res.status(400).send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    return;
  }
  const jogadorRemovido = jogadores.splice(indice, 1);
  res.send(jogadores);
});


app.get('/adicionar', (req, res) => {
  const nome = req.query.nome
  jogadores.push(nome);
  res.send(jogadores);
});

app.listen(8000, () => {
  console.log('Seu servidor está rodando na porta 8000');
});
