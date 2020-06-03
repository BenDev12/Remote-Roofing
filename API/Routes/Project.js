const express = require("express");
const projectController = require("../Controllers/ProjectController");

const router = express.Router();

router.post("/createProject", projectController.createProject);

router.get("/createTask", projectController.createTask);

router.get("/fetchProject", projectController.fetchProject);

router.get("/fetchTask", projectController.fetchTask);

// router.get("/singleProject");
// router.get("/singleTask");

// router.put("/updateProject");
router.delete("/Project:projectId");
router.delete("/Task:TaskId");
module.exports = router;
