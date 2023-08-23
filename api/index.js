const app = require('express')();
const fetch = require('node-fetch')

app.post('/api/currency/usd', async (req, res) => {

  const usdResponse = await fetch('https://dolarapi.com/v1/dolares');
  const usdData = await usdResponse.json();

  res.end(`Currency: ${usdData}`);
});

module.exports = app;