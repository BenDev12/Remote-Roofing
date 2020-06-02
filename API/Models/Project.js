const Sequelize = require("sequelize");
const sequelize = require("../Util/dbConnection");

const Project = sequelize.define("project", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING,
  },
});

module.exports = Project;
