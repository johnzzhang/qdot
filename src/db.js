const mongoose = require("mongoose");

// setup mongoDB connection
const mongoURL = "mongodb://qdotadmin:1joulepersecond@ds249418.mlab.com:49418/qdot"
const options = {  };
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// error handler
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function() {
    console.log('database connected');
});
module.exports = db;