const express = require("express");

const router = express.Router();

router.get("/weekly_activities", (req, res) => {
	res.render("admin/weekly_activities");
});

router.get("/testimonies", (req, res) => {
	res.render("admin/testimony");
});

module.exports = router;
