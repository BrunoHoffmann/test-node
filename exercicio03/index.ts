import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/factorial', (req, res) => {
  const { number } = req.body;

  function calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  }

  const factorial = calculateFactorial(number);

  return res.json({ factorial });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server run port:${port}`);
});