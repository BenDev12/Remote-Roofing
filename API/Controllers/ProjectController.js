// const Project = require("../Modals/Project")
// const Task = require("../Modals/Task")

exports.createProject = (req, res, next) => {
  const name = req.body.name;
  const body = req.body.body;
  const status = req.body.status;

  // Project.create({
  //   name: name,
  //   body: body,
  //   status: status,
  // })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

exports.createTask = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const score = req.body.score;
  const status = req.body.status;

  // Task.create({
  //   name: name,
  //   description: description,
  //   status: status,
  //   score: score,
  // })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
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
