const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

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
}));

module.exports = router;