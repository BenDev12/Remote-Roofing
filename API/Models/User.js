const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
