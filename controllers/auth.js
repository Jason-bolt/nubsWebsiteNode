const pool = require("../database/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Joy validation
const Joi = require("joi");

// Registration Schema
const registerSchema = Joi.object({
	first_name: Joi.string().required(),
	last_name: Joi.string().required(),
	email: Joi.string().email().lowercase().required(),
	password: Joi.string()
		.min(8)
		.max(20)
		.required()
		.messages({ "any.required": "Passwords do not match" }),
	password_confirm: Joi.ref("password"),
});

// Login Schema
const loginSchema = Joi.object({
	email: Joi.string().email().lowercase().required(),
	password: Joi.string().required(),
});

// Registeration codes
exports.register = (req, res) => {
	const { first_name, last_name, email, password, password_confirm } = req.body;

	const { error, value } = registerSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		console.log(error);
		// return res.send(error.details);
		return res.render("register", { alerts: error.details, success: null });
	}

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
						alerts: [{ message: "That email is already in use" }],
						success: null,
					});
				}

				let hashedPassword = await bcrypt.hash(password, 10);
				console.log(hashedPassword);

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
							return res.render("login", {
								alerts: [{ message: "User registered" }],
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

// Login codes
exports.login = (req, res) => {
	const { email, password } = req.body;

	const { error, value } = loginSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		console.log(error);
		// return res.send(error.details);
		return res.render("login", { alerts: error.details, success: null });
	}

	// Check if user exsits in the database
	pool.query(
		"SELECT * FROM admins WHERE email = ?",
		[email],
		async (errors, results, fields) => {
			try {
				if (errors) {
					console.log(errors);
					return;
				} else {
					// console.log(results);

					// No user was found in the database
					if (results.length == 0) {
						console.log("No user found!");
						return res.render("login", {
							alerts: [{ message: "Invalid admin credentials!" }],
							success: null,
						});
					} else {
						// admin = JSON.parse(JSON.stringify(results))[0];
						// console.log(admin.password);
						// A user was found, now check if passwords match
						await bcrypt.compare(
							password,
							results[0].password,
							(err, result) => {
								if (err) {
									console.log(err);
									return;
								}

								// Passwords match
								if (result) {
									console.log("Passwords match, login success");
									req.session.admin_id = results[0].id;
									req.session.email = results[0].email;
									return res.redirect("admin/weekly_activities");
								} else {
									console.log("Passwords do not match, login failed");
									return res.render("login", {
										alerts: [{ message: "Invalid admin credentials!" }],
										success: null,
									});
								}
							}
						);
					}
				}
			} catch (error) {
				console.log(error);
			}
		}
	);
};
