const app = require('express')();
const fetch = require('node-fetch')

app.post('/api/currency/usd', async (req, res) => {

  const result = await fetch('https://dolarapi.com/v1/dolares')
  res.end(`Currency: ${result}`);
});

module.exports = app;