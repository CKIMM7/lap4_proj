const express = require('express');
const router = express.Router();

const controller = require('./controller');

// router.get('/', controller.createTables)
router.get('/leaderboard', controller.getLeaderboard);

module.exports = router;