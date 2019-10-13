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

router.post('/', (req, res) => {
  db.Item.create(req.body)
    .then((newItem) => {
      res.json(newItem);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
