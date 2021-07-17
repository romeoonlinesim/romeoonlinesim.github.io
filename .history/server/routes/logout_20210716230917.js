const express = require("express");
const router = express.Router();
const passport = require("passport");

const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
})

module.exports = router;