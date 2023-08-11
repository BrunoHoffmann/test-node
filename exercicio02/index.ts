import express from 'express'

const app = express();

app.get('/bubble-sort', (req, res) => {
  const data = [5,3,2,4,7,1,0,6]
  const tamanho = data.length;

  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < tamanho - 1; i += 2) {
      if (i + 1 < tamanho && data[i] > data[i + 1]) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
        sorted = false;
      }
      if (i + 2 < tamanho && data[i + 1] > data[i + 2]) {
        [data[i + 1], data[i + 2]] = [data[i + 2], data[i + 1]];
        sorted = false;
      }
    }
  } while (!sorted);

  return res.json(data);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server run port:${port}`);
});
