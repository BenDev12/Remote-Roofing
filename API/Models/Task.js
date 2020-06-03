const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,

    primaryKey: true,
    autoIncrement: true,
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
