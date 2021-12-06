var express = require('express');
var router = express.Router();

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

var juegosModel = require('../../models/juegosModel');

// variables predeterminadas

var arrValoracion = [
    { valor: 1, nombre: '1' },
    { valor: 2, nombre: '2' },
    { valor: 3, nombre: '3' },
    { valor: 4, nombre: '4' },
    { valor: 5, nombre: '5' },
];


// funciones helpers

const validar = function(nombre, id_genero, recomendado, nota) {
    let arrAlertas = new Array();
    if (nombre.length < 2) {
        arrAlertas.push("Debe ingresar el nombre del juego.")
    }

    if (id_genero === '') {
        arrAlertas.push("Debe seleccionar un género.")
    }

    if (recomendado && nota.length < 2) {
        arrAlertas.push("Si es un juego recomendado debe ingresar una nota.")
    }

    return arrAlertas;
};

const pasarArrayAMensaje = function(arr) {
    let mensaje = '';
    arr.forEach(element => {
        mensaje += mensaje == '' ? element : '<br>' + element
    });

    return mensaje;
}

// controladores

router.get('/', async function(req, res, next) {

    var juegos = await juegosModel.getJuegos();

    juegos = juegos.map(juego => {
        if(juego.img_id){
            const imagen = cloudinary.image(juego.img_id, {
                width: 96,
                height: 96,
                crop: 'fill'
            });

            return {
                ...juego, imagen
            }
        } else {
            return {
                ...juego,
                imagen: ''
            }
        }
    });

    res.render('admin/juegos', {
        layout: 'admin/layoutLogged',
        titulo: 'Galería',
        juegos: juegos
            //usuario: req.session.nombre,
    });
});

router.get('/agregar', async function(req, res, next) {

    const generos = await juegosModel.getGeneros();

    res.render('admin/agregar', {
        layout: 'admin/layoutLogged',
        titulo: 'Galería',
        generos: generos,
        arrValoracion: arrValoracion
    });
});

router.post('/agregar', async function(req, res, next) {

    let img_id = null;

    if (req.files && Object.keys(req.files).length > 0) {
        const imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id
    }

    const generos = await juegosModel.getGeneros();

    try {

        const alertas = validar(req.body.nombre, req.body.id_genero, req.body.recomendado, req.body.nota);
        if (alertas.length > 0) {

            res.render('admin/agregar', {
                layout: 'admin/layoutLogged',
                titulo: 'Galería',
                generos: generos,
                arrValoracion: arrValoracion,
                error: true,
                message: pasarArrayAMensaje(alertas)
            })

        } else {

            req.body.img_id = img_id
            await juegosModel.insertJuego(req.body)

            res.redirect('/admin/juegos');
        }

    } catch (err) {
        console.log(err)

        res.render('admin/agregar', {
            layout: 'admin/layoutLogged',
            titulo: 'Galería',
            generos: generos,
            arrValoracion: arrValoracion,
            error: true,
            message: 'No fue posible cargar el juego'
        })
    }

    res.render('admin/agregar', {
        layout: 'admin/layoutLogged',
        titulo: 'Galería',
        generos: generos,
        arrValoracion: arrValoracion
    });
});

router.get('/eliminar/:id', async function(req, res, next) {

    await juegosModel.deleteJuegoById(req.params.id);

    res.redirect('/admin/juegos');
});


router.get('/modificar/:id', async function(req, res, next) {

    const generos = await juegosModel.getGeneros();
    const juego = await juegosModel.getJuegoById(req.params.id);

    res.render('admin/modificar', {
        layout: 'admin/layoutLogged',
        titulo: 'Galería',
        generos: generos,
        arrValoracion: arrValoracion,
        juego,
    });

});

router.post('/modificar', async function(req, res, next) {
    try {

        let img_id = req.body.img_id_actual === '' ? null : req.body.img_id_actual;
        let eliminar_imagen = false;
        if(req.body.eliminar_img){
            img_id = null;
            eliminar_imagen = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                const imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;

                eliminar_imagen = true;
            }

        }

        if(eliminar_imagen && req.body.img_id_actual){
            await(destroy(req.body.img_id_actual))
        }

        const obj = {
            nombre: req.body.nombre,
            id_genero: req.body.id_genero,
            gratis: req.body.gratis ? 1 : 0,
            valoracion: req.body.valoracion,
            recomendado: req.body.recomendado ? 1 : 0,
            nota: req.body.nota,
            img_id: img_id
        }

        const result = await juegosModel.updateJuegoById(obj, req.body.id);

        if (result.error) {
            console.log(result.error_detalles);

            const generos = await juegosModel.getGeneros();
            const novedad = await juegosModel.getJuegoById(req.params.id);

            res.render('admin/modificar', {
                layout: 'admin/layoutLogged',
                titulo: 'Galería',
                generos: generos,
                arrValoracion: arrValoracion,
                error: true,
                message: 'No fue posible modificar el juego'
            })

        } else {
            res.redirect('/admin/juegos');
        }


    } catch (err) {
        console.log(err);

        res.render('admin/modificar', {
            layout: 'admin/layoutLogged',
            titulo: 'Galería',
            generos: generos,
            arrValoracion: arrValoracion,
            error: true,
            message: 'No fue posible modificar el juego'
        })

    }


});

module.exports = router;