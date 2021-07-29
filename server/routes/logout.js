const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = "http://localhost:5000";

router.get("/", require("connect-ensure-login").ensureLoggedIn(), (req, res) => {
    req.logout();
    res.send({
        authenticated: req.isAuthenticated(),
        user: req.user
    });
    //res.redirect(CLIENT_HOME_PAGE_URL);
    //next();
})

module.exports = router;