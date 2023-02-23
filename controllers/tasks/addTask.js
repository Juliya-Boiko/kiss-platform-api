const Task = require('../../models/task');

const addTask = async (req, res) => {
  const { _id } = req.user;
  const newTask = await Task.create({ ...req.body, owner: _id });

  res.status(200).json({
    newTask
  });
};

module.exports = addTask;