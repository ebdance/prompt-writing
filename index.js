var path = require('path')
var express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.bodyParser())

app.get('/prompt', function(req, res) {
  var prompts = ['what', 'who', 'why', 'when', 'durp', 'hurp', 'foo']
  var randIndex = Math.floor(Math.random() * prompts.length)

  res.json({ prompt: prompts[randIndex] })
})


console.log('started yo')
app.listen(1700)
