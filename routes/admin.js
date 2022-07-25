const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.get("/weekly_activities", (req, res) => {
	// res.send(req.session);
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/weekly_activities", { page: "weekly_activities" });
	}
});

router.get("/news-events", (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/news_events", { page: "news" });
	}
});

router.get("/testimonies", (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/testimonies", { page: "testimonies" });
	}
});

router.get("/gallery", (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/gallery", { page: "gallery" });
	}
});

router.get("/executives", (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/executives", { page: "executives" });
	}
});

router.post("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/login");
});

module.exports = router;
