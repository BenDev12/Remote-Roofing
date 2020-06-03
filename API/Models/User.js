const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  surname: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});
module.exports = User;
