// Dependencies
const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const fs = require("fs");
const nodeJSPath = require("path");

//Routes

router.get("/", (req, res) => {
    res.render("home");
});

module.exports = router;