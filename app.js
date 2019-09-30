var Server = require('./server.js')
var port = (process.env.PORT || 8080)
var app = Server.app()

app.listen(port)
