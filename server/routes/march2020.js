var express = require('express');
var router = express.Router();
var dayjs = require('dayjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let now = dayjs();
  // res.send({'today': now.format()});
  march2020AsEpoch = dayjs('2020-03-01').unix()
  res.send({'march2020': parseInt((now.unix() - march2020AsEpoch)/86400)});
});

module.exports = router;
