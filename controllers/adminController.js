const { json } = require("body-parser");
const pool = require("../database/connection");

// Function to be returned when Weekly Activities tab is clicked
exports.weekly_activities = (req, res) => {
	const activities = pool.query(
		"SELECT * FROM weekly_activities",
		(error, result, field) => {
			if (error) {
				console.log(error);
				res.send(json(error));
			}
			// No error
			if (req.session.admin_id == undefined) {
				res.redirect("/login");
			} else {
				res.render("admin/weekly_activities", {
					page: "weekly_activities",
					activities: result,
				});
			}
		}
	);
};

// Function to be returned when News/Events tab is clicked
exports.news = (req, res) => {
	const events = [
		{
			id: 1,
			image: "carousel2.jpg",
			name: "Event1",
			details:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel     quod mollitia vero blanditiis quaerat laborum ad in commodi veniam obcaecati dignissimos expedita sint, deserunt id sapiente qui est Amet.",
		},
		{
			id: 2,
			image: "carousel3.jpg",
			name: "Event2",
			details:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel     quod mollitia vero blanditiis quaerat laborum ad in commodi veniam obcaecati dignissimos expedita sint, deserunt id sapiente qui est Amet.",
		},
		{
			id: 3,
			image: "carousel4.jpg",
			name: "Event3",
			details:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel     quod mollitia vero blanditiis quaerat laborum ad in commodi veniam obcaecati dignissimos expedita sint, deserunt id sapiente qui est Amet.",
		},
		{
			id: 4,
			image: "carousel1.jpg",
			name: "Event4",
			details:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel     quod mollitia vero blanditiis quaerat laborum ad in commodi veniam obcaecati dignissimos expedita sint, deserunt id sapiente qui est Amet.",
		},
	];

	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/news_events", {
			page: "news",
			events: events,
		});
	}
};

// Function to be returned when Testimonies tab is clicked
exports.testimonies = (req, res) => {
	const testimonies = [
		{
			id: 1,
			image: "https://randomuser.me/api/portraits/men/11.jpg",
			name: "Name of person",
			testimony:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Quae natus quisquam saepe explicabo. Id iste, minus quos autem quasi est!",
		},
		{
			id: 2,
			image: "https://randomuser.me/api/portraits/women/11.jpg",
			name: "Name of person",
			testimony:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Quae natus quisquam saepe explicabo. Id iste, minus quos autem quasi est!",
		},
		{
			id: 3,
			image: "https://randomuser.me/api/portraits/men/12.jpg",
			name: "Name of person",
			testimony:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit Quae natus quisquam saepe explicabo. Id iste, minus quos autem quasi est!",
		},
	];

	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/testimonies", {
			page: "testimonies",
			testimonies: testimonies,
			pendingTestimonies: testimonies,
		});
	}
};

// Function to be returned when Gallery tab is clicked
exports.gallery = (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/gallery", { page: "gallery" });
	}
};

// Function to be returned when Executives tab is clicked
exports.executives = (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/executives", { page: "executives" });
	}
};

// Function to be returned when Donate tab is clicked
exports.donate = (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.send("Admin donate page");
	}
};
