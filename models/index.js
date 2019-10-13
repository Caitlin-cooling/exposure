const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/item-api');

mongoose.Promise = Promise;

module.exports.Item = require('./item.js');
