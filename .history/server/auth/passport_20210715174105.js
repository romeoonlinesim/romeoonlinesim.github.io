const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../schema/userSchema").User;

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
        User.findOne()
    }
))
