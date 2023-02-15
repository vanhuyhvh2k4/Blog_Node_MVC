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
            .then(() => res.redirect(`/me/stored/courses`))
            .catch(next);
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

    // [DELETE] /courses/:id
    delete (req, res, next) {
        Course.delete({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore (req, res, next) {
        Course.restore({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/force
    deleteForce (req, res, next) {
        Course.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /courses/handle-form-action
    handleFormAction (req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds }})
                .then(() => res.redirect('back'))
                .catch(next);
                break;
            default: res.json({message: 'Action is invalid'})
        }
    }

}

module.exports = new CourseController;