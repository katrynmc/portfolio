require('es6-promise').polyfill();
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator')
const Joi = require('webpack-validator').Joi;

const yourSchemaExtension = Joi.object({
  stylus: Joi.any()
})

const config = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
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
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
};

module.exports = validate(config, { schemaExtension: yourSchemaExtension });
