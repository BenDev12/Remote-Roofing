const Sequelize = require("sequelize");
const sequelize = require("../Util/dbConnection");

const Project = sequelize.define("project", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Project;
