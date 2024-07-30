const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  // Call to some AI chat service or custom chatbot logic
  res.json({ reply: `You said: ${message}` });
});

module.exports = router;
