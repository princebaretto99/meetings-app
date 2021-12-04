const model = require('../model');
var createError = require('http-errors')

const createTask = async (data) => {
    try {
        let {
            userName, taskDescription, dueDate, adminName
        } = data;

        const task = await model.Task.create({
            userName, taskDescription, dueDate, adminName
        })
        
        return {
            "task": task,
        };

    } catch (err) {
        return Promise.reject(err);
    }
}

const getTasks = async () => {
    try {
        const tasks = await model.Task.find({})
        
        return {
            "tasks": tasks,
        };

    } catch (err) {
        return Promise.reject(err);
    }
}

module.exports = {
    createTask,
    getTasks
}