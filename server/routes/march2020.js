var express = require('express');
var router = express.Router();
var dayjs = require('dayjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let now = dayjs();
  res.send({'today': now.format()});
});

module.exports = router;
