require("dotenv").load();
var express = require('express');
var router = express.Router();
var axios = require("axios");

router.get('/players/:date', function(req, res, next) {
  axios({
    method: "get",
    url: "http://api.nfldata.apiphany.com/nfl/v2/JSON/PlayerSeasonStats/"+ req.params.date + "REG",
    headers: {"Ocp-Apim-Subscription-Key": process.env.FANTASY_NFL_KEY}
  }).then(function(data) {
    res.status(202).json(data);
  });
});

module.exports = router;
