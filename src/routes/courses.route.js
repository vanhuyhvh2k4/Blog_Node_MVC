const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController.js');


router.get('/:id/edit', CourseController.edit);
router.delete('/:id', CourseController.delete);
router.put('/:id', CourseController.update);
router.post('/store', CourseController.store);
router.get('/create', CourseController.create);
router.get('/:slug', CourseController.show);

module.exports = router;