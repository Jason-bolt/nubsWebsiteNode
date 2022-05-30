const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const publicRouter = require("./routes/public");

app.set("view engine", "ejs");

app.use(publicRouter);

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.listen(5000);
