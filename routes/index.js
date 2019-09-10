const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')


// Do work here
router.get('/', storeController.myMiddleware, storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reversedName = [...req.params.name].reverse().join('')
  res.send(reversedName)
})

module.exports = router;