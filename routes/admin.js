const express = require("express");

const router = express.Router();

router.get("/weekly_activities", (req, res) => {
	res.render("admin/weekly_activities");
});

router.get("/news-events", (req, res) => {
	res.render("admin/news_events");
});

router.get("/testimonies", (req, res) => {
	res.render("admin/testimonies");
});

router.get("/gallery", (req, res) => {
	res.render("admin/gallery");
});

router.get("/executives", (req, res) => {
	res.render("admin/executives");
});

module.exports = router;
