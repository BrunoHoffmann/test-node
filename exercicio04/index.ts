import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/multiplo', (req, res) => {
  const { valor } = req.body;
  if (!valor) {
    return res.status(400).json({ error: 'Preencha o valor em x' });
  }

  const numeroInt = parseInt(valor);

  if (isNaN(numeroInt) || numeroInt <= 0) {
    return res.status(400).json({ error: 'Foi passado um valor invalido no x' });
  }

  let soma = 0;

  for (let i = 1; i < numeroInt; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  return res.json({ soma });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server run port:${port}`);
});