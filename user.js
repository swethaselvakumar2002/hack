const express = require('express');
const { updateProgress, getRecommendations } = require('../controllers/UserController');
const router = express.Router();

router.post('/progress', updateProgress);
router.post('/recommendations', getRecommendations);

module.exports = router;
