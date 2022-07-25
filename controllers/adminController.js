// Function to be returned when Weekly Activities tab is clicked
exports.weekly_activities = (req, res) => {
	// res.send(req.session);
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/weekly_activities", { page: "weekly_activities" });
	}
};

// Function to be returned when News/Events tab is clicked
exports.news = (req, res) => {
	if (req.session.admin_id == undefined) {
		res.redirect("/login");
	} else {
		res.render("admin/news_events", { page: "news" });
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
