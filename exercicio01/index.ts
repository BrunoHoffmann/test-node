import express from 'express'
import CalculadoraEleicoes from './services/calculadora-eleicoes';

const totalEleitores = 1000;
const validos = 800;
const votosBrancos = 150;
const nulos = 50;

const app = express();

const calculadora = new CalculadoraEleicoes(
  totalEleitores, 
  validos, 
  votosBrancos, 
  nulos
);

app.get('/percentuais', (req, res) => {
  const percentuais = {
      percentualValidos: calculadora.calcularPercentualValidos(),
      percentualBrancos: calculadora.calcularPercentualBrancos(),
      percentualNulos: calculadora.calcularPercentualNulos()
  };
  res.json(percentuais);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server run port:${port}`);
});
