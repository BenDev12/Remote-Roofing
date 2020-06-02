const Sequelize = require("sequelize");
const sequelize = require("../Util/dbConnection");

const User = require("../Models/User");

User.sync()
  .then((result) => {
    console.log("Dtabase connection sucessful");
  })
  .catch((error) => {
    console.log(error);
  });
exports.addUser = (req, res, next) => {
  const Surname = req.body.Surname;
  const name = req.body.name;
  const email = req.body.email;
};

exports.getLogin = (req, res, next) => {
  console.log("login working fine");
};

exports.getUsers = (req, res, next) => {};
