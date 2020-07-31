const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);
router.post("/signup", usersController.registerUser);
router.post("/login", usersController.authenticateUser);

module.exports = router;
