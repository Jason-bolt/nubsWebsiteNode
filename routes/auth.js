const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/forgot_password", (req, res) => {
	res.render("forgot_password");
});

module.exports = router;
