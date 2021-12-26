//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Route Import
const weatherRoute = require("./routes/weather");

// View Engine 
app.set("view engine", "ejs");

// Middleware route
app.use("/", weatherRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
	console.log(`Server is running on port ${PORT}.`);
});