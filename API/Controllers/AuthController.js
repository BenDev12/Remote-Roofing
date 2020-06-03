const Sequelize = require("sequelize");
const sequelize = require("../Util/dbConnection");

const User = require("../Models/User");

exports.addUser = (req, res, next) => {
  const surname = req.body.surname;
  const name = req.body.name;
  const email = req.body.email;

  User.create({
    surname: surname,
    name: name,
    email: email,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getLogin = (req, res, next) => {
  console.log("login working fine");
};
