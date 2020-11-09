const hbs = require('hbs')
const express = require('express')
const { text } = require('express')
const app = express()
require('./hbs/helpers')

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', function(req, res) {
    res.render('home', {
        name: 'Luis'
    })
})

app.get('/about', function(req, res) {
    res.render('about')
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))