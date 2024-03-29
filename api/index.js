const app = require('express')();
const fetch = require('node-fetch')

const getUsd = async () => {
  const usdResponse = await fetch('https://dolarapi.com/v1/dolares');
  const usdData = await usdResponse.json();

  const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random');
  const jokeData = await jokeResponse.json();

  const houses = [];
  for (const house of usdData) {
      houses.push(`Casa: ${house.casa} - Compra: ${house.compra} - Venta: ${house.venta}`);
  }
  houses.push(' ');
  houses.push(`\n${jokeData.value}\n`);

  return houses.join('\n');
};

app.get('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.setHeader('Content-Type', 'application/json');

  const response = {
    response_type: 'in_channel',
    text: usdData,
  }

  res.json(response);
});

app.post('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.setHeader('Content-Type', 'application/json');

  const response = {
    response_type: 'in_channel',
    text: usdData,
  }

  res.json(response);
});

module.exports = app;