const imoveis = require('../dados/imoveis')

const get = (req, res)=>{
  let resultados = imoveis
  res.send(resultados)
}


const getPorId = (req,res)=>{
  const idEncontrado = imoveis.find((imovel)=>{
    return imovel.id === Number(req.params.id)
  })
  res.send(idEncontrado)
}

module.exports= {
  get,
  getPorId
}