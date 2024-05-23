const express = require("express");
const mongoose = require('mongoose');
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const menuItem = require("./app/models/menu");
const PORT = process.env.PORT || 3011;

// Assets
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//set Template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// creation of data
app.post("/menus", async(req, res) => {
    try{
        const product = await menuItem.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// get all data
app.get("/menus", async(req, res) => {
    try {
        const product = await menuItem.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//DB connection
mongoose.connect("mongodb+srv://lepha121:Ram111@cluster0.1rqgyue.mongodb.net/API-for-Tracking?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
    });

// all route from web.js
require("./routes/web")(app);
