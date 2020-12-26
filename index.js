const app = require("./app");
const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${NODE_ENV}`,
});

const mongopass = process.env.PASS_MONGO;
const mongoUser = process.env.USER_MONGO;

// Mongo DB connection
mongoose

  .connect(
    `mongodb+srv://${mongoUser}:${mongopass}@cluster0.cvkqm.mongodb.net/phones_react`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port-> ${port}`));
