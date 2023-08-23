const app = require('express')();
const fetch = require('node-fetch')

const getUsd = async () => {
  const usdResponse = await fetch('https://dolarapi.com/v1/dolares');
  const usdData = await usdResponse.json();

  return JSON.stringify(usdData);
};

app.get('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.end(`Currency: ${usdData}`);
});

app.post('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.end(`Currency: ${usdData}`);
});

module.exports = app;