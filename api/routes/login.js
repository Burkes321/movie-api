const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = { username: "1", password: "1" };

  console.log(username === user.username && password === user.password);
  console.log({ user });
  console.log(req.body);

  // Outside scope of task, would query DB to check user auth
  // currently just checking against local array
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, "jwtSecret", {
      expiresIn: 60 * 24 * 7,
    });

    res.send(token);
  } else {
    res
      .sendStatus(401)
      .send({ message: "Wrong username / password combination" });
  }
});

module.exports = router;
