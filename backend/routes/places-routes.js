const express = require("express");
const router = express.Router();
const placesControllers = require("../controllers/placesControllers");
router.get("/user/:uid", placesControllers.getPlaceByUserId);
router.get("/:pid", placesControllers.getPlaceById);
module.exports = router;
//middleware
