const express = require('express');
const { isModuleNamespaceObject } = require('util/types');
const router = express.Router();
const juegosModel = require('../models/juegosModel');
var cloudinary = require('cloudinary').v2;

const armarImagenesJuegos = function(arrJuegos, cfg={}){
    cfg.id = typeof cfg.id === 'undefined' ? null : cfg.id;
    cfg.class = typeof cfg.class === 'undefined' ? 'card-img-top' : cfg.class;
    cfg.width = typeof cfg.width === 'undefined' ? null : cfg.width;
    cfg.height = typeof cfg.height === 'undefined' ? null : cfg.height;
    cfg.crop = typeof cfg.crop === 'undefined' ? 'fill' : cfg.crop;

    arrJuegos = arrJuegos.map(juego => {
        if(juego.img_id){
            const imagen = cloudinary.image(juego.img_id, cfg);

            return {...juego, imagen}
        } else {
            return {...juego, imagen: ''}
        }
    });

    return arrJuegos;
};

router.get('/juegos', async function(req, res, next){
    let juegos = await juegosModel.getJuegos();

    juegos = armarImagenesJuegos(juegos);

    res.json(juegos);
});

router.get('/recomendados', async function(req, res, next){
    let juegos = await juegosModel.getRecomendados();

    juegos = armarImagenesJuegos(juegos);

    res.json(juegos);
});

module.exports = router;