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

router.post("/", passport.authenticate("localLogin", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: CLIENT_HOME_PAGE_URL + "/login",
    //failureRedirect: "verifyLogin/failure",
    failureFlash: true
}));

/*router.get("/failure", function(req, res) {
    res.redirect(CLIENT_HOME_PAGE_URL + "/login#error");
});*/

module.exports = router;