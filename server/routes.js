const express = require('express');
const router = express.Router();

const controller = require('./controller');

// router.get('/', controller.createTables)
// router.get('/leaderboard/', controller.getLeaderboard);
router.get('/leaderboard/:category/:difficulty', controller.getLeaderboard);

// router.post('/leaderboard/:', controller.);

module.exports = router;

//router.get('/leaderboard:id' ??