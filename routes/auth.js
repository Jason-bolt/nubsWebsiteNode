const express = require("express");

// Import authentication controller
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", (req, res) => {
	res.render("login", { alerts: null, success: null });
});

router.get("/register", (req, res) => {
	res.render("register", { alerts: null, success: null });
});

router.get("/forgot_password", (req, res) => {
	res.render("forgot_password");
});

// Working with parsed data
router.post("/register", authController.register);

router.post("/login", authController.login);

module.exports = router;
