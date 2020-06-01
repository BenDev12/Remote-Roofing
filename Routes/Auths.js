const express = require("express");
const AuthController = require("../Controllers/AuthController");

const router = express.Router();

router.get("/signup", AuthController.addUser);

router.get("/login", AuthController.getLogin);

module.exports = router;
