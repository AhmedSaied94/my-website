const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()

app.use(expressLayout)
app.set('view engine', 'ejs' )
app.use(express.static('public'))
app.get('/', (req, res) => res.render('Proj_1'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server running on port '+PORT))