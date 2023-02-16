const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const sortMiddlewares = require('./app/middlewares/sort.middlewares.js');

const route = require('./routes/index.js')

const db = require('./config/db/index.js');

// Connect to Mongo database
db.connect();

app.use(methodOverride('_method'));

app.use(sortMiddlewares);

// midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

// write frontend
app.engine('handlebars', exphbs({
  helpers: {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';
      const icons = {
        default: 'oi oi-elevator',
        asc: 'fa-solid fa-arrow-up-wide-short',
        desc: 'fa-solid fa-arrow-up-short-wide'
      }
      const types = {
        default: 'desc',
        desc: 'asc',
        asc: 'desc'
      }

      const icon = icons[sortType];
      const type = types[sortType];
      return `<a href="?_sort&column=${field}&type=${type}">
      <span class="${icon}"></span>
    </a>`
    }
  }

  })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// logger
// app.use(morgan('combined'));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});