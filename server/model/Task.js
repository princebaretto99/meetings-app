const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    userName: String,
    taskDescription: String,
    dueDate: Date,
    adminName: String
},
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    }
);


const Task = mongoose.model("task", TaskSchema);
module.exports = Task;