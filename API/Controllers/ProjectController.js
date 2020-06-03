const Sequelize = require("sequelize");

const sequelize = require("../Util/dbConnection");

const Project = require("../Models/Project");
const Task = require("../Models/Task");

exports.createProject = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const body = req.body.body;
  const status = req.body.status;
  Project.create({
    id: id,
    name: name,
    body: body,
    status: status,
  })
    .then((project) => {
      res.json(project);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.createTask = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const score = req.body.score;
  const status = req.body.status;
  Task.create({
    name: name,
    description: description,
    score: score,
    status: status,
  })
    .then((task) => {
      console.log("task created");
    })
    .catch((error) => {
      console.log(error);
    });
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
exports.deleteProject = (req, res, next) => {
  const proId = req.body.projectId;
  Project.findById(proId)
    .then((Project) => {
      return Project.destroy();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
