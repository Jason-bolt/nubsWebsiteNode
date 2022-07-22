const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// Database connection
const pool = require("./database/connection");

app.use(express.static(__dirname + "/public"));
const publicRouter = require("./routes/public");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

// To support sending with POST
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set("view engine", "ejs");

app.use(flash());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(publicRouter);
app.use(authRouter);
app.use("/admin", adminRouter);

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.listen(5000);
