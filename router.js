const express = require("express");
const router = express.Router();

// Index Page
router.get("/", (req, res) => res.render("index"));

// Parsed xml
router.get("/xml", (req, res) => res.render("xmlParse"));

module.exports = router;
