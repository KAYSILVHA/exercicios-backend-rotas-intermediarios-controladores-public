const express = require('express')
const {get, getPorId} =require('./controladores/imoveis')

const app = express()

app.get('/imoveis', get)
app.get('/imoveis/:id', getPorId)

app.listen(8000, ()=>{
  console.log("Servidor rodando na porta 8000")
})