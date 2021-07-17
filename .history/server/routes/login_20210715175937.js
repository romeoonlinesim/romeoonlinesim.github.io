const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

router.get("/login", 
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

router.post("/login", passport.authenticate("localLogin"), {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
});

module.exports = router;