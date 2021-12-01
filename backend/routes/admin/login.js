var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

var loginPage = 'admin/login'
var homePage = '/admin/juegos'

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.id_usuario == undefined){
        res.render(loginPage, {
            layout: 'admin/layout',
        })
        
    } else {
        res.render(homePage, {
            layout: 'admin/layoutLogged'
        });
    }
    
});


/* Logout */

router.get('/logout', function(req, res, next) {

    req.session.destroy();

    res.render(loginPage, {
        layout: 'admin/layout'
    });
});

/* Fin de Logout */

/* Login */

router.post('/', async(req, res, next) => {
    try {

        var usuario = req.body.user;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect(homePage);
        } else {
            res.render(loginPage, {
                layout: 'admin/layout',
                error: true
            });
        }

    } catch (error) {
        console.log(error);
    }
});

/* Fin de Login */

module.exports = router;