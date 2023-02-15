const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/MeController.js');

// NewsControllers
router.get('/stored/courses', CourseController.storedCourses);
router.get('/trash/courses', CourseController.trashCourses);

module.exports = router;