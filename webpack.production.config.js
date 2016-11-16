require('es6-promise').polyfill();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './app/entry'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
};
