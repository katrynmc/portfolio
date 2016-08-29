require('es6-promise').polyfill();

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.styl']
  }
};
