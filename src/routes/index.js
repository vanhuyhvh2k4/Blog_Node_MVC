const newsRouter = require('./news.route.js');
const siteRouter = require('./site.route.js');
const coursesRouter = require('./courses.route.js');

function route(app) {

    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}

module.exports = route;