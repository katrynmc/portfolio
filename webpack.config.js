require('es6-promise').polyfill();
const path = require("path");

module.exports = {
  entry: './app/entry.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.(png|jpg)$/, loader: "file-loader?name=img/img-[hash:6].[ext]" }
    ],
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
};
