const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController.js');

// NewsControllers
router.post('/store', CourseController.store);
router.get('/create', CourseController.create);
router.get('/:slug', CourseController.show);

module.exports = router;