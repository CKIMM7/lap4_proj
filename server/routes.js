const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/leaderboard/:category/:difficulty', controller.getLeaderboard);

router.post('/gameEnd', controller.insert);
// router.post('/gameEnd/:category/:difficulty/:name/:score', controller.insert);

module.exports = router;

//router.get('/leaderboard:id' ??