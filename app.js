const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')



console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
        colors: true
    },
    reporter: null,
    publicPath: config.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))
}
else {
  const config = require('./webpack.production.config.js')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
        colors: true
    },
    reporter: null,
    publicPath: config.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))

}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
