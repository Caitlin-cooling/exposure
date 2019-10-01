const express = require('express');

const app = express();
const port = 3000;

const itemRoutes = require('../routes/items.js');

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/items', itemRoutes);

app.listen(port, () => console.log('Hello console'));
