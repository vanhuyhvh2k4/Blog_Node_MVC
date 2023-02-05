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

    
    // [GET] /courses/:id/edit
    edit (req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {
                course: course
            }))
            .catch(next)
    }

    // [PUT] /courses/:id
    update (req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    
}

module.exports = new CourseController;