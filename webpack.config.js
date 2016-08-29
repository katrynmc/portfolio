require('es6-promise').polyfill();

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
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
