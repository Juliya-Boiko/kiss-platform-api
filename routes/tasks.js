const express = require('express');
const tasksRouter = express.Router();
const { authentication, validation } = require('../middlewares');
const { controllerWrapper } = require('../helpers');
const { taskSchema } = require('../schemas/tasks');
const { getTasks, addTask, deleteTask, updateTask } = require('../controllers/tasks');

tasksRouter.get('/', authentication, controllerWrapper(getTasks));

tasksRouter.post('/', authentication, validation(taskSchema), controllerWrapper(addTask));

tasksRouter.delete('/:id', authentication, controllerWrapper(deleteTask));

tasksRouter.put('/:id', authentication, validation(taskSchema), controllerWrapper(updateTask));

module.exports = tasksRouter;