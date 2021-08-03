const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = process.env.NODE_ENV === "production" 
                                ? process.env.CLIENT_HOMEPAGE
                                : "http://localhost:5000";

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

router.post("/", passport.authenticate("localRegister", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: CLIENT_HOME_PAGE_URL + "/register",
    failureFlash: true
}));

module.exports = router;