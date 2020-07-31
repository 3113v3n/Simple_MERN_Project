const express = require("express");
const router = express.Router();
const placesControllers = require("../controllers/placesControllers");
const { check } = require("express-validator");
router.get("/user/:uid", placesControllers.getPlacesByUserId);
router
  .route("/:pid")
  .get(placesControllers.getPlaceById)
  .delete(placesControllers.deletePlaceById)
  .patch(
    [
      check("title").not().isEmpty(), //validate that its not empty
      check("description").isLength({ min: 5 }),
    ],
    placesControllers.patchPlaceByid
  );
router.post(
  "/",
  [
    check("title").not().isEmpty(), //validate that its not empty
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

module.exports = router;
//middleware
