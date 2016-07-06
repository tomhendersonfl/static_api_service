var express = require('express');
var router = express.Router();
var users = require('../public/data/users');
var getActive = require('../public/javascripts/get-active');

router.get('/users', function(req, res, next) {
  res.json({users: users});
});

module.exports = router;
