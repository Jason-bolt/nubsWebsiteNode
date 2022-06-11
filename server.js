const express = require("express");
const app = express();
const pool = require("./database/connection");
app.use(express.static(__dirname + "/public"));
const publicRouter = require("./routes/public");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

app.set("view engine", "ejs");

app.use(publicRouter);
app.use(authRouter);
app.use("/admin", adminRouter);

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.listen(5000);
