const express = require("express");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Phones API",
      description: "Phones API Information",
      contact: {
        name: "Daniel.B.G",
        url: "https://www.linkedin.com/in/daniel-b-g/",
        email: "daniel.barriga.grados@gmail.com",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Import Routes
const phonesRoutes = require("./routes/phones");
app.use("/phone", phonesRoutes);

// app.get("/", function (req, res) {
//   res.send("Daniel.B API!");
// });

module.exports = app;
