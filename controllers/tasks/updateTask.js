const Task = require('../../models/task');

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
   updatedTask,
  })
};

module.exports = updateTask;