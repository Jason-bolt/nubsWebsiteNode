const express = require("express");
const adminController = require("../controllers/adminController");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.get("/weekly_activities", adminController.weekly_activities);

router.get("/news-events", adminController.news);

router.get("/testimonies", adminController.testimonies);

router.get("/gallery", adminController.gallery);

router.get("/executives", adminController.executives);

router.get("/donate", adminController.donate);

router.post("/edit_activity/:id", adminController.edit_activity);

router.post("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/login");
});

module.exports = router;
