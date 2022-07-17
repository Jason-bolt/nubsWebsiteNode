const pool = require("../database/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
	const { first_name, last_name, email, password, password_confirm } = req.body;

	// Check if user is already registered
	pool.query(
		"SELECT email FROM admins WHERE email = ?",
		[email],
		async (error, results) => {
			try {
				// Check for errors
				if (error) {
					console.log(error);
				}

				// Check number of entries in the result
				if (results.length > 0) {
					return res.render("register", {
						message: "That email is already in use",
					});
					// Check if passwords match
				} else if (password !== password_confirm) {
					return res.render("register", {
						message: "Passwords do not match",
						success: false,
					});
				}

				let hashedPassword = await bcrypt.hash(password, 8);
				// console.log(hashedPassword);

				// Insert values in the database
				pool.query(
					"INSERT INTO admins SET ?",
					{
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: hashedPassword,
					},
					(error, results) => {
						if (error) {
							console.log(error);
						} else {
							console.log(results);
							return res.render("register", {
								message: "User registered",
								success: true,
							});
						}
					}
				);
			} catch (error) {
				console.log(error);
			}
		}
	);
};
