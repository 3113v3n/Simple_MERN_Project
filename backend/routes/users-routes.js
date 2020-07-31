const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { check } = require("express-validator");

router.get("/", usersController.getAllUsers);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(), //validate that its not empty
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.registerUser
);
router.post("/login", usersController.authenticateUser);

module.exports = router;
