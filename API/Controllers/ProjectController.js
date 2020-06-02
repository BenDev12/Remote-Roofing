const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const Project = require("../Models/Project");
const Task = require("../Models/Task");

Project.sync();
exports.createProject = (req, res, next) => {
  const name = req.body.name;
  const body = req.body.body;
  const status = req.body.status;
};
Task.sync();
exports.createTask = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const score = req.body.score;
  const status = req.body.status;
};
exports.fetchProject = (req, res, next) => {
  Project.findAll()
    .then((Project) => {
      res.json(Project);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("all products fetched sucessfully");
};

exports.fetchTask = (req, res, next) => {
  Task.findAll()
    .then((Task) => {
      res.json(Task);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Tasks fetched sucessfully");
};
