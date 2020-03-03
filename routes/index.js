const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.json({
    'teste': 'joas'
  });
});

module.exports = router;
