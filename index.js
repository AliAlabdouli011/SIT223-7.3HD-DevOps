
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({status: 'ok'}));
app.get('/price', (req, res) => {
  res.json({ item: 'milk', cheapest: 'Aldi', price: 3.20 });
});

const server = app.listen(PORT, () => console.log(`API listening on ${PORT}`));

module.exports = server;
