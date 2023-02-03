const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

// write frontend
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// logger
app.use(morgan('combined'));

// render

// HOME
app.get('/', (req, res) => {  
  res.render('home');
});

// NEWS
app.get('/news', (req, res) => {  
  res.render('news');
});

// SEARCH
app.get('/search', (req, res) => {  
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});