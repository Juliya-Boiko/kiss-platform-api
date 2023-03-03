const User = require('../../models/user');
const createError = require('http-errors');
const Task = require('../../models/task');

const deleteUser = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findById(_id);
  if (!result) {
    throw createError(404, `User not found`);
  }

  const tasks = await Task.find({ owner: _id });
  for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];
    await Task.findByIdAndRemove(element._id);
  }

  await User.findByIdAndRemove(_id);

  res.status(200).json({
    message: 'User deleted',
  });
};

module.exports = deleteUser;