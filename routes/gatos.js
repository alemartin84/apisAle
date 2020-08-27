var express = require('express');
var router = express.Router();
const gatosModels = require('./../models/gatosModels');



router.get('/', async function(req, res, next) {

   
    let respuesta = await gatosModels.getHecho();
    let fotoGatito = await gatosModels.getCatPic();
    
    res.render('gatos', { hechos : respuesta, ruta : fotoGatito });  
   
});

module.exports = router;
