const express = require("express");
const taskController = require("../controllers/task");
const {authenticate} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/task", authenticate,taskController.createTask);
router.get("/task", authenticate, taskController.getTasks);
router.put("/task/:id", authenticate, taskController.updateTask);
router.delete("/task/:id", authenticate, taskController.deleteTask);

module.exports = router;