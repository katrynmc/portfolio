/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
var path = require('path')
var express = require('express')

module.exports = {
  app: function () {
    var app = express()
    var publicPath = express.static(path.join(__dirname, 'build'))

    app.use('/build', publicPath)
    app.get('*', function (request, response){
      response.sendFile(path.resolve(__dirname, 'build/index.html'))
    })

    return app
  }
}
