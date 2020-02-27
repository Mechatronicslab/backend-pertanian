const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const fs = require('fs')
const bodyParser = require('body-parser')
const db = require('./config/dbConfig')

app.use(cors())
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))

app.use(bodyParser.urlencoded({
  extended:true,
  limit: '50mb'
}))

db.connectToDb

app.use(express.static('static'))

// list route
app.use('/user', require('./routes/user'))
app.use('/device', require('./routes/device'))

app.listen(port, function(){
  console.log('Listening on port ' + port)
})
