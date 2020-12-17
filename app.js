const express = require("express");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Import Routes
const phonesRoutes = require("./routes/phones");
app.use("/phone", phonesRoutes);

app.get("/", function (req, res) {
  res.send("Daniel.B API!");
});

module.exports = app;
