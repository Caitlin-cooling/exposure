const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  db.Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
