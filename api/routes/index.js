require("dotenv").config();
process.env;
var express = require("express");
const fetch = require("node-fetch");
const app = require("../app");
var router = express.Router();
const jwt = require("jsonwebtoken");
const apiKey = process.env.MOVIES_API_KEY;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// API Fetch

router.post("/testApi", async (req, res) => {
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

router.get("/testApi", async (req, res) => {
  res.send("test api working");
});

// LOGIN & AUTH

const verifyJwt = (req, res, next) => {
  const token = req.headers("x-access-token");
  if (!token) {
    res.send("token required");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Authentication failed" });
      } else {
        req.userId = decodedId;
        next();
      }
    });
  }
};

router.get("/isUserAuth", verifyJwt, (req, res) => {
  res.send("you are authenticated");
});

router.get("/login", (req, res) => {
  res.send("Login page");
});

const user = { username: "1", password: "1" };

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === user.username && password === user.password) {
    // res.sendStatus(200).send({ message: "Login Successful!" });

    const token = jwt.sign({ username }, "jwtSecret", {
      expiresIn: 300,
    });

    res.send("authenticated");
  } else {
    res
      .sendStatus(401)
      .send({ message: "Wrong username / password combination" });
  }
});

module.exports = router;
