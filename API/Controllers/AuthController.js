// const User = require("../Modals/User");

exports.addUser = (req, res, next) => {
  const Surname = req.body.Surname;
  const name = req.body.name;
  const email = req.body.email;

  // User.create({
  //   Surname: Surname,
  //   name: name,
  //   email: email,
  // })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

exports.getLogin = (req, res, next) => {
  console.log("login working fine");
};

exports.getUsers = (req, res, next) => {};
