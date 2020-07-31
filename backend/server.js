const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const HttpErrorHandler = require("./model/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use("/api/places", placesRoutes); //initialize middleware and filter paths starting with /api/places

app.use((req, res, next) => {
  throw new HttpErrorHandler("Could not find this route", 404);
});
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
