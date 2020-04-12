//import dependances
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
let app = express();

//declaring routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Create routes 

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Create paths to html, css
app.use(express.static("public"));


//calling routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//port listener
app.listen(PORT, function() {
console.log("http://localhost:" + PORT);
});