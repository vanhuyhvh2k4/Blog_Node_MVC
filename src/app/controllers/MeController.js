const Course = require('../models/Course.js');

class MeController {
    
    // [GET] /me/stored/courses
    storedCourses (req, res, next) {
        let CourseQuery = Course.find({}).lean();

        if (req.query.hasOwnProperty('_sort')) {
            CourseQuery = CourseQuery.sort({
                [req.query.column]: req.query.type,
            });

        }
        Promise.all([CourseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', {courses: courses, deletedCount: deletedCount})
            )
            .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses (req, res, next) {
        Course.findDeleted({}).lean()
        .then(courses => res.render('me/trash-courses', {
            courses: courses,
        }))
        .catch(next)
    }
}

module.exports = new MeController;