const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

//when login successfully, retrieve user's info
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "user has successfully logged in",
            user: req.user,
            cookies: req.cookies
        });
    }
});

//when login failed, send failed msg
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success:false,
        message: "user failed to log"
    });
});

//when logout, redirect to home page
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("CLIENT_HOME_PAGE_URL");
});