'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/api', function (req, res) {
	res.send({
		"key": require('./build/Release/native.node').hello()
	})
})

module.exports = router;
