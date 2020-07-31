const HttpErrorHandler = require("../model/errorHandler");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const DUMMY_USER = [
  {
    id: "u1",
    name: "Sidney Reezy",
    email: "test@email.com",
    password: "testers",
  },
];
const getAllUsers = (req, res, next) => {
  let NEW_DUMMY_LIST = [];
  DUMMY_USER.map((user) => {
    return NEW_DUMMY_LIST.push({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });
  res.json({ users: NEW_DUMMY_LIST });
};
const registerUser = (req, res, next) => {
  const errorsObject = validationResult(req);
  if (!errorsObject.isEmpty()) {
    throw new HttpErrorHandler("Invalid Inputs provided,check your data", 422);
  }
  const { name, email, password } = req.body;
  const newUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  const existingUser = DUMMY_USER.find((u) => u.email === email);
  if (existingUser) {
    throw new HttpErrorHandler("Email already in Use", 422); //422 ==> invalid user input
  }
  DUMMY_USER.push(newUser);
  res.status(201).json({ message: "Successfully Registered", user: newUser });
};
const authenticateUser = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USER.find((user) => user.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpErrorHandler("Invalid User Credentials Provided", 401);
  }
  res.status(200).json({ message: "Login Successful" });
};

exports.getAllUsers = getAllUsers;
exports.registerUser = registerUser;
exports.authenticateUser = authenticateUser;
