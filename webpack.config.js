const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve('./frontend/build/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: '/.js$/',
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
