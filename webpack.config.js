const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    './app/entry'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    publicPath: '/build/',
    // the url to the output directory resolved relative to the HTML page
    filename: 'bundle.js'
    // the filename template for entry chunks
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
          presets: ['babel-preset-env', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
     {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader',
          query: {
              classIdPrefix: '[name]-[hash:8]__',
              propsMap: {
                  fillRule: 'fill-rule'
              },
              xmlnsTest: /^xmlns.*$/
          }
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
    ],
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: [ './build'],
    port: '8080',
    inline: true,
    overlay: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
    alias: {
      Images: path.resolve(__dirname, 'app/assets/images'),
      Config: path.resolve(__dirname, 'app/config'),
      Components: path.resolve(__dirname, 'app/components'),
      Styles: path.resolve(__dirname, 'app/assets/styl'),
    }
  }
};
