//Load express module with `require` directive - by GK hola
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Parece que funciona!')
})

//Launch listening server on port 3000
app.listen(3000, function () {
  console.log('Otro ejercicio conseguido!')
})
