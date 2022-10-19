var express = require("express");
var router = express.Router();
const gatosModels = require("./../models/gatosModels");

router.get("/", async function (req, res, next) {
  
  let fotoGatito = await gatosModels.getCatPic();

  res.render("gatos", {
    ruta: fotoGatito,
    title: "Gatitos 🐱‍👤",
  });
});

module.exports = router;
