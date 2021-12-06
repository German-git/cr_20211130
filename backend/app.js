const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
const session = require('express-session');
const { engine } = require('express-handlebars');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin/juegos');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/admin/login');
const juegosRouter = require('./routes/admin/juegos');
const apiRouter = require('./routes/api');

const app = express();

const Handlebars = require('hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// extra setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(session({
    secret: 'c850af029e7721711c90077947bc6847',
    resave: false,
    saveUninitialized: true
}));

secured = async(req, res, next) => {
    try {

        if (req.session.id_usuario) {
            next();
        } else {
            res.redirect('/admin/login');
        }

    } catch (error) {
        console.log(error);
    }
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/juegos', secured, juegosRouter);
app.use('/admin', secured, adminRouter);
app.use('/api', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// helpers

HBHelpers = require('./helpers/handlebars');

Handlebars.registerHelper('truncate', HBHelpers.truncate);
Handlebars.registerHelper('ifEq', HBHelpers.ifEq);
Handlebars.registerHelper('ifNotEq', HBHelpers.ifNotEq);


module.exports = app;
