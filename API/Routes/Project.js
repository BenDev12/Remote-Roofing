const express = require("express");
const projectController = require("../Controllers/ProjectController");

const router = express.Router();

router.get("/AddProject", projectController.addProject);

router.get("/AddTask", projectController.addTask);

router.get("/fetchProject", projectController.fetchProject);

router.get("/fetchTask", projectController.fetchTask);

router.get("/singleProject");
router.get("/singleTask");
module.exports = router;
