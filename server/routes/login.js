const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = process.env.NODE_ENV === "production" 
                                ? process.env.CLIENT_HOMEPAGE
                                : "http://localhost:5000";
console.log(CLIENT_HOME_PAGE_URL);

router.get("/", 
            require("connect-ensure-login").ensureLoggedOut(),
            (req, res) => {
                res.json({
                    user: null,
                    errors: {
                        email: req.flash("email"),
                        password: req.flash("password")
                    }
                })
            }
);

router.post("/", passport.authenticate("localLogin", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: CLIENT_HOME_PAGE_URL + "/login",
    failureFlash: true
}), (req, res) => {
    console.log(CLIENT_HOME_PAGE_URL);
	console.log(process.env.CLIENT_HOMEPAGE);
    console.log(process.env.NODE_ENV);
});

module.exports = router;
