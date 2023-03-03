const Task = require('../../models/task');
const createError = require('http-errors');

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    throw createError(404, `Contact with id=${id} not found`);
  };
  res.status(200).json({
    task
  })
};

module.exports = getTaskById;