const Task = require('../../models/task');

const getTasks = async (req, res) => {
  const { _id } = req.user;
  const tasks = await Task.find({ owner: _id });
  res.status(200).json({
   tasks
  });
};

module.exports = getTasks;