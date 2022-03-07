var express = require("express");
const fetch = require("node-fetch");
const app = require("../app");
var router = express.Router();
const jwt = require("jsonwebtoken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// API Fetch

module.exports = router;
