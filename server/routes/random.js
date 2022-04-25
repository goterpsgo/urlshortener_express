var express = require('express');
var router = express.Router();

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'value': between(10, 200)});
});

module.exports = router;
