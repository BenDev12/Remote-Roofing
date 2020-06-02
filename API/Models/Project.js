const Sequelize = require("sequelize");

const sequelize = require("../Util/db");

const Project = sequelize.define("project", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
  },
  body: {
    type: sequelize.STRING,
  },
});

modules.exports = product;
