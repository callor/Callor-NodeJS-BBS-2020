var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('bbsList', { title: 'Express' });
  res.redirect('/bbs/list')
});

module.exports = router;
