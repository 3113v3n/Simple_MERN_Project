const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use("/api/places", placesRoutes); //initialize middleware and filter paths starting with /api/places

//Error handler
//Allow developer to define status code and message
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Something went wrong" });
}); //4 param middlewares are treated as error handling middlewares
app.listen(5000, () => {
  console.log("Server started");
});
