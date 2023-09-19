
const somar = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 + num2;
  res.send(resultado.toString());
}

const subtrair = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 - num2;
  res.send(resultado.toString());
}


const multiplicar = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 * num2;
  res.send(resultado.toString());
}


const dividir = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 / num2;
  res.send(resultado.toString());
}



module.exports={
  somar, subtrair, multiplicar, dividir
}