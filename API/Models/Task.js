const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    alloNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  score: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Task;
