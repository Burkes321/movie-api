require("dotenv").config();
process.env;
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const apiKey = process.env.MOVIES_API_KEY;

router.post("/", async (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  const year = req.body.year;

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&y=${year}&type=${type}`;
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => console.error(e));
  res.json(response);
});

router.get("/", async (req, res) => {
  res.send("test api working");
});

module.exports = router;
