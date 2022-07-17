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

// To support sending with POST
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set("view engine", "ejs");

app.use(publicRouter);
app.use(authRouter);
app.use("/admin", adminRouter);

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.listen(5000);
