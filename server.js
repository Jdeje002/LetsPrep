var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
<<<<<<< HEAD
=======
require('dotenv').config()
>>>>>>> 7973b37e73370b8399eb6f87760c29ad3408e15f


var app = express()
var PORT = process.env.PORT || 8080

var db = require('./models')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(express.static('public'))


require('./routes/api-routes.js')(app)
require('./routes/html-routes')(app)

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function() {
        console.log("http://localhost:" + PORT)
    })
})

