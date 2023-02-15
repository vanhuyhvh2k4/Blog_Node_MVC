const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController.js');


router.post('/handle-form-action', CourseController.handleFormAction);
router.get('/:id/edit', CourseController.edit);
router.delete('/:id', CourseController.delete);
router.delete('/:id/force', CourseController.deleteForce);
router.put('/:id', CourseController.update);
router.patch('/:id/restore', CourseController.restore);
router.post('/store', CourseController.store);
router.get('/create', CourseController.create);
router.get('/:slug', CourseController.show);

module.exports = router;