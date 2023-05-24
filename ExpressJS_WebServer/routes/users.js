// Dependencies
const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const fs = require("fs");
const nodeJSPath = require("path");

//Routes

router.get("/login", (req, res) => {
    res.render("login");
})

router.get("/register", (req, res) => {
    res.render("register");
})


module.exports = router;