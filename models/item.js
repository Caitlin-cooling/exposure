const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank',
  },
  description: String,
  sizes: [String],
  date: { type: Date, default: Date.now },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
