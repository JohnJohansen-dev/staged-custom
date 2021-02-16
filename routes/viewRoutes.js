const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

console.log('at viewRoutes');
router.get('/', viewsController.getHomePage);

module.exports = router;
