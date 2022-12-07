const express = require('express');
const router = express.Router();

const controller = require('../src/api/controller/controller');

router.get('/leaderboard', controller.getLeaderboard);

module.exports = router;