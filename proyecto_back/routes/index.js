var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hola Mundo' });
  res.send("pruebas sin motor de vistas");
});

module.exports = router;
