const express = require("express");
const AuthController = require("../Controllers/AuthController");

const router = express.Router();

router.post("/addUser", AuthController.addUser);
router.get("/user", AuthController.getUsers);
router.get("/signup", AuthController.addUser);

router.get("/login", AuthController.getLogin);
router.get("/User", AuthController.addUser);

module.exports = router;
