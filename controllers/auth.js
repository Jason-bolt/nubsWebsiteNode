const pool = require("../database/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
	password: Joi.string().min(8).max(20).required(),
});

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
							return res.render("register", {
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
