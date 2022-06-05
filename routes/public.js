const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	const bannerImages = [
		{
			image: "/images/banner1.jpg",
		},
		{
			image: "/images/banner2.jpg",
		},
		{
			image: "/images/banner3.jpg",
		},
	];
	const testimonies = [
		{
			image: "https://randomuser.me/api/portraits/men/11.jpg",
			name: "John Doe",
			testimony:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus quisquam vdfvlvj lvfvdvdflvv dv dfvh dfv",
		},
		{
			image: "https://randomuser.me/api/portraits/women/11.jpg",
			name: "Jane Doe",
			testimony:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus quisquam vdfvlvj lvfvdvdflvv dv dfvh dfv",
		},
	];
	weeklyActivities = [
		{
			image: "/images/pic1.jpeg",
			serviceName: "Sunday Service",
			day: "Sunday",
			time: "8:00am to 11:30pm",
			location: "Assembly Hall",
		},
		{
			image: "/images/pic1.jpeg",
			serviceName: "Prayer Force",
			day: "Tuesday",
			time: "7:00pm to 8:30pm",
			location: "New Life Baptist Church",
		},
		{
			image: "/images/pic1.jpeg",
			serviceName: "Midweek Service",
			day: "Thursday",
			time: "6:30am to 8:00pm",
			location: "New Life Baptist Church",
		},
	];
	res.render("index", {
		testimonies: testimonies,
		bannerImages: bannerImages,
		weeklyActivities: weeklyActivities,
		page: "home",
	});
});

router.get("/about", (req, res) => {
	res.render("about", { page: "about" });
});

router.get("/news-events", (req, res) => {
	res.render("news-events", { page: "news-events" });
});

router.get("/gallery", (req, res) => {
	res.render("gallery", { page: "gallery" });
});

router.get("/departments", (req, res) => {
	res.render("departments", { page: "departments" });
});

router.get("/executives", (req, res) => {
	res.render("executives", { page: "executives" });
});

router.get("/contact", (req, res) => {
	res.render("contact", { page: "contact" });
});

module.exports = router;
