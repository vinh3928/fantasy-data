require("dotenv").load();
var express = require('express');
var router = express.Router();
var axios = require("axios");

router.get('/allplayers/:date', function(req, res, next) {
  axios({
    method: "get",
    url: "http://api.nfldata.apiphany.com/nfl/v2/JSON/PlayerSeasonStats/"+ req.params.date + "REG",
    headers: {"Ocp-Apim-Subscription-Key": process.env.FANTASY_NFL_KEY}
  }).then(function(data) {
    res.status(200).json(data);
  });
});

router.get('/player/:id', function(req, res, next) {
  axios({
    method: "get",
    url: "http://api.nfldata.apiphany.com/nfl/v2/JSON/Player/"+ req.params.id,
    headers: {"Ocp-Apim-Subscription-Key": process.env.FANTASY_NFL_KEY}
  }).then(function(data) {
    res.status(200).json(data);
  });
});

router.get("/playerstats/:year/:week/:id", function(req, res, next) {
  axios({
    method: "get",
    url: "http://api.nfldata.apiphany.com/nfl/v2/JSON/PlayerGameStatsByPlayerID/" + req.params.year + "/" + req.params.week + "/"+ req.params.id,
    headers: {"Ocp-Apim-Subscription-Key": process.env.FANTASY_NFL_KEY}
  }).then(function(data) {
    res.status(200).json(data);
  });

});
module.exports = router;
