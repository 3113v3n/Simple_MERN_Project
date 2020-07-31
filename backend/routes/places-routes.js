const express = require("express");
const router = express.Router();
const placesControllers = require("../controllers/placesControllers");

router.get("/user/:uid", placesControllers.getPlacesByUserId);
router
  .route("/:pid")
  .get(placesControllers.getPlaceById)
  .delete(placesControllers.deletePlaceById)
  .patch(placesControllers.patchPlaceByid);
router.post("/", placesControllers.createPlace);

module.exports = router;
//middleware
