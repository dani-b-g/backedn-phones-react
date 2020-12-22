const express = require("express");

const Phone = require("../models/phone");

const router = express.Router();

/**
 * @swagger
 * /phone:
 *  get:
 *    description: Use to request all phones
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", function (req, res) {
  Phone.find()
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(data);
    })
    .catch((error) => {
      res.json({ Error: "Error with the BBDD" });
    });
});
/**
 * @swagger
 * /phone/{id}:
 *  get:
 *    summary: Use to request all phones
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required:  true
 *          description:  Id of the phone
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/:id", function (req, res) {
  Phone.find({ id: req.params.id })
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(data);
    })
    .catch((error) => {
      res.json({ Error: "Error with the BBDD" });
    });
});

module.exports = router;
