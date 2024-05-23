const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3011;

// Assets
app.use(express.static("public"));

//set Template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("home");
})

// cart page
app.get("/cart", (req, res) => {
    res.render("customers/cart")
})

// login page
app.get("/login", (req, res) => {
    res.render("auth/login");
})

// Register page
app.get("/register", (req, res) => {
    res.render("auth/register");
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});