const express = require('express');
const router = express.Router();

// Dummy endpoint for running code (expand with actual execution logic)
router.post('/run', (req, res) => {
  const { code } = req.body;
  // Run the code and send back the result
  res.json({ output: `Executed code: ${code}` });
});

module.exports = router;
