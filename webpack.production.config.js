require('es6-promise').polyfill();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './app/entry'
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app')
        ],
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'autoprefixer-loader'
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [require('nib')()],
              import: ['~nib/lib/nib/index.styl']
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
      // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

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
    extensions: ['.js', '.jsx', '.styl'],
    alias: {
      Images: path.resolve(__dirname, 'app/assets/images/')
    }
  }
};
