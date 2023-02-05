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

    // [GET] /courses/create
    create (req, res, next) {
        res.render('courses/create.handlebars')
    }
    
    // [POST] /courses/create
    store (req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect(`/`))
            .catch(error => {
            });
    }

    
}

module.exports = new CourseController;