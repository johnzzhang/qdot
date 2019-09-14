const mongoose = require("mongoose");

// setup mongoDB connection
const mongoURL = "mongodb://danharmon:harmonquest@ds159997.mlab.com:59997/nat20"
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