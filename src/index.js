const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const express = require('express')
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'))

// render
app.get('/', (req, res) => {  
  res.render('home');
})

app.get('/news', (req, res) => {  
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})