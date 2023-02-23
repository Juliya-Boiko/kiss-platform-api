const Task = require('../../models/task');
const createError = require('http-errors');

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndRemove(id);
  if (!result) {
    throw createError(404, `Task with id=${id} not found`);
  }
  res.status(200).json({
    message: 'Task deleted',
  });
};

module.exports = deleteTask;