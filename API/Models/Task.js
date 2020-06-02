const Sequelize = require("sequelize");

const sequelize = require("../Util/db");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    alloNull: false,
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

modules.exports = task;
