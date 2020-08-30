var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", varEntorno: process.env.ALE_VAR });
});

module.exports = router;
