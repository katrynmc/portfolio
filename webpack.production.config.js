require('es6-promise').polyfill();
const path = require('path');
var Webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './app/entry.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css!autoprefixer-loader!stylus'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
      {
        test: require.resolve('ramda'),
        loader: 'expose?R'
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React'
      }
    ],
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  plugins: [
    new Webpack.EnvironmentPlugin([
      "NODE_ENV"
    ])
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
};
