const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('../routes/items.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));

app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => console.log('Hello console'));
