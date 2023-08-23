const app = require('express')();
const fetch = require('node-fetch')

const getUsd = async () => {
  const usdResponse = await fetch('https://dolarapi.com/v1/dolares');
  const usdData = await usdResponse.json();

  return JSON.stringify(usdData);
};

app.get('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.setHeader('Content-Type', 'application/json');

  const response = {
    response_type: 'in_channel',
    text: `Currency: ${usdData}`,
  }

  res.end(response);
});

app.post('/api/currency/usd', async (req, res) => {
  const usdData = await getUsd();
  res.setHeader('Content-Type', 'application/json');

  const response = {
    response_type: 'in_channel',
    text: `Currency: ${usdData}`,
  }

  res.end(response);
});

module.exports = app;