const express = require('express');
const itemRoutes = require('../routes/items.js');

const app = express();
const port = 3000;

app.use('/api/items', itemRoutes);
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => console.log('Hello console'));
