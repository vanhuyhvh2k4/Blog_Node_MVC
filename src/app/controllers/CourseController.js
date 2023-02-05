const Course = require('../models/Course.js');

class CourseController {

    // [GET] /courses/:slug
    show (req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show.handlebars', { course });
            })
            .catch(next)
    }
}

module.exports = new CourseController;