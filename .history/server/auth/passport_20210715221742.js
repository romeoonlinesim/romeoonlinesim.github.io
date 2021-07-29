const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../schema/userSchema");

passport.serializeUser((user, callback) => {
    callback(null, user);
});

passport.deserializeUser((obj, callback) => {
    callback(null, obj);
});

//strategy for handling user registration
passport.use("localRegister", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
},
    (req, email, password, done) => {
        User.findOne({$or: [{email: email}, {username: req.body.username}]},  (err, user) => {
            if (err)
                return done(err);
            if (user) {
                if (user.email === email) {
                    req.flash('email', 'Email is already taken');
                }
                if (user.username === req.body.username) {
                    req.flash('username', 'Username is already taken');
                }

                return done(null, false);
            } else {
                let user = new User();
                user.email = email;
                user.password = user.generateHash(password);
                user.username = req.body.username;
                user.save( (err) => {
                    if (err)
                        throw err;
                    return done(null, user);
                });
            }
        });
    }
));

//strategy for authenticating users
passport.use('localLogin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    (req, email, password, done) => {

        User.findOne({$or: [{email: email}, {username: email}]}, (err, user) => {
            if (err)
                return done(err);

            if (!user)
                return done(null, false);

            if (!user.validPassword(password))
                return done(null, false));

            return done(null, user);
        });
    }
));

module.exports = passport;