var express = require('express');
var router = express.Router();

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
    const ifeq = function(a, b){return a == b}

    const generos = await juegosModel.getGeneros();

    const novedad = await juegosModel.getJuegoById(req.params.id);

    res.render('admin/modificar', {
        layout: 'admin/layoutLogged',
        titulo: 'Galería',
        generos: generos,
        arrValoracion: arrValoracion,
        novedad,
        helpers: {
            ifeq: function(arg1, arg2, options){
                return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
            }
        }
    });
    
});

module.exports = router;