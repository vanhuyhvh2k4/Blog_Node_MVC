const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes/index.js')

const db = require('./config/db/index.js');

// Connect to Mongo database
db.connect();

// midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

// write frontend
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// logger
// app.use(morgan('combined'));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});