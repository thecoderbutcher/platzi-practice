const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  res.send('categories')
})

router.get('/:id',(req, res) => {

})

module.exports = router;