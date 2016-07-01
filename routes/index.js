var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v0/boards', function(req, res, next) {

  res.json({status: "ok" , data: [{id: 1, title:"firstOne"}]});
});

module.exports = router;
