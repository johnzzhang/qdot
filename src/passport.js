const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user');

//configuration
passport.use('local-login', new LocalStrategy(
	function(username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) {
				console.log('err');
				return done(err);
			}
			if (!user) {
				return done(null, false, {message: 'Incorrect username.'});
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password'});
			}
			return done(null, user);
		});
	}
));

passport.use('local-signup', new LocalStrategy(
	function(username, password, done) {

		 // not sure why this is needed
		 process.nextTick(function() {

		 	// find user
		 	User.findOne({ username: username }, function(err, user) {
		 		if(err) {
		 			return done(err);
		 		}
		 		if(user) {
		 			return done(null, false, { message: 'Username taken.'})
		 		}
		 		else {
		 			const newUser = new User();
		 			newUser.username = username;
		 			newUser.password = newUser.generateHash(password);

		 			newUser.save(function (err) {
		 				if(err) {
		 					throw err;
		 				}
		 				return done(null, newUser);
		 			});
		 		}
		 	});
		 });
	}
));


passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

module.exports = passport;