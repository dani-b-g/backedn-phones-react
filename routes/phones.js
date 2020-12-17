const express = require("express");

const mongoose = require("mongoose");

const Phone = require("../models/phone");

const router = express.Router();

router.get("/", function (req, res) {
  Phone.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
