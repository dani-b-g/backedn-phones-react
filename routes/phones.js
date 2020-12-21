const express = require("express");

const Phone = require("../models/phone");

const router = express.Router();

router.get("/", function (req, res) {
  Phone.find()
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(data);
    })
    .catch((error) => {
      res.json({ Error: "Problemas con la BBDD" });
    });
});

module.exports = router;
