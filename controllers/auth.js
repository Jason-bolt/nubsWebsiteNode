const pool = require("../database/connection");

exports.register = (req, res) => {
	const { first_name, last_name, email, password, password_confirm } = req.body;

	// Check if user is already registered
	pool.query(
		"SELECT email FROM admins WHERE email = ?",
		[email],
		(error, result) => {
			// Check for errors
			if (error) {
				console.log(error);
			}

			// Check number of entries in the result
			if (results.length > 0) {
				return res.render("register", {
					message: "That email is already in use",
				});
			} else if (password !== password_confirm) {
				return res.render("register", {
					message: "Passwords do not match",
				});
			}
		}
	);
};
