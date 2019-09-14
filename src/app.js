// libraries
const http = require('http');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const express = require('express');
const session = require('express-session');
const passport = require('passport');

// local dependencies
const db = require('./db');
const views = require('./routes/views');
const api = require('./routes/api');

// initialize express app
const app = express();

// initialize session
app.use(session({
	secret: 'session-secret',
	resave: 'false',
	saveUninitialized: 'true'
}));

// passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// set POST request body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set routes
app.use('/', views);
app.use('/api',api);
app.use('/static', express.static('public'));

// 404 route
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// route error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if(err.status === 404) {
  	res.sendFile('404.html', { root: 'src/views' });
  }
  else {
  	res.send({
  	  status: err.status,
  	  message: err.message,
  	});
  }
});

// port config
const port = 3000;
const server = http.Server(app);
server.listen(port, function() {
        console.log('Server running on port: ' + port);
});

module.exports = passport;