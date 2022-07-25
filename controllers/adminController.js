// Function to be returned when Weekly Activities tab is clicked
exports.weekly_activities = (req, res) => {
	const weekly_activities = [
		{
			id: 1,
			service: "Sunday Service",
			day: "Sunday",
			image: "pic1.jpeg",
			start_time: "8:00am",
			end_time: "11:30pm",
			location: "Assembly Hall",
		},
		{
			id: 2,
			service: "Prayer Force",
			day: "Monday",
			image: "pic1.jpeg",
			start_time: "7:00pm",
			end_time: "8:00pm",
			location: "Casford Field",
		},
		{
			id: 3,
			service: "Midweek Service",
			day: "Thursday",
			image: "pic1.jpeg",
			start_time: "6:30pm",
			end_time: "8:00pm",
			location: "New Life Baptist",
		},
	];

	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/weekly_activities", {
			page: "weekly_activities",
			activities: weekly_activities,
		});
	}
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
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/testimonies", { page: "testimonies" });
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
