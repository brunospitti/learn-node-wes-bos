const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey!ad asdasd asdsdsd It works!');
});

module.exports = router;
