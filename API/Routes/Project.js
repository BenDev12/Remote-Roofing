const express = require("express");
const projectController = require("../Controllers/ProjectController");

const router = express.Router();

router.get("/createProject", projectController.createProject);

router.get("/createTask", projectController.createTask);

router.get("/fetchProject", projectController.fetchProject);

router.get("/fetchTask", projectController.fetchTask);

router.get("/singleProject");
router.get("/singleTask");
module.exports = router;
