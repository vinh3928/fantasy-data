var express = require('express');
var router = express.Router();
var axios = require("axios");



router.get('/', function(req, res, next) {
  //axios({
    //method: "get",
    //url: "http://api.nfldata.apiphany.com/nfl/v2/JSON/PlayerSeasonStats/2014REG",
    //headers: {"Ocp-Apim-Subscription-Key": "f87b2bea208c481c8ca800b1414851a1"}
  //}).then(function(data) {
    //console.log(data);
  //});
  res.render('index', { title: 'Express' });
});

module.exports = router;
