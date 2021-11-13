var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./config/database');
var auth = require('./auth/main_auth');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var empleadosRouter = require('./routes/empleados.router');
var usuariosRouter = require('./routes/usuarios.router');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoConnection la usamos para llamar la funcion creada en el archivo database
database.mongoConnect();
app.use('/usuarios', usuariosRouter);//Se configura la variable de usuarios antes de la autenticacion
app.use(auth);//Se debe colocar despues de la conexion a la base de datos para validar la autenticacion


//Router
app.use('/empleados', empleadosRouter);
//app.use('/usuarios', usuariosRouter);
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

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

module.exports = app;
