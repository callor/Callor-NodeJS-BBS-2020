var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
    
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bbsRouter = require('./routes/bbsController')(app);
var replyRouter = require('./routes/replyController')(app);



var sequelize = require('./models/index').sequelize;
sequelize.sync()


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true, parameterLimit:5000000}));

app.use(logger('dev'));
// app.use(express.json({limit: "50mb"}));
// app.use(express.urlencoded({imit: "50mb", extended: true , parameterLimit:1000000}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/', indexRouter);
app.use('/bbs', bbsRouter);
app.use('/reply', replyRouter);

app.use('/users', usersRouter);


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
