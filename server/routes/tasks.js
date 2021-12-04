const express = require("express");
const { createTask, getTasks } = require("../controllers/tasks");
const router = express.Router();
const {
    registerUser, loginUser, findByEmail
} = require("../controllers/user");

router.post("/createTask", async (req, res) => {
    try {
        
        // username,taskdes, due date, adminName
        let userName = req.body.userName
        let taskDescription = req.body.taskDescription 
        let dueDate = req.body.dueDate 
        let adminName = req.body.adminName 

        const result = await createTask({
            userName, taskDescription, dueDate, adminName
        })

        res.status(200).json(result.task._id);
    } catch (err) {
        console.log(err, err.status, err.message);
        res.status(err.status).json({
            error: err.message
        })
    }
})

router.get("/getAllTasks", async (req, res) => {
    try {
        const result = await getTasks()

        res.status(200).json(result);
    } catch (err) {
        console.log(err, err.status, err.message);
        res.status(err.status).json({
            error: err.message
        })
    }
})

module.exports = router;