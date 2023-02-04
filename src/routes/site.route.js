const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController.js');

// NewsControllers
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;