const User = require('../../models/user');
const { Unauthorized } = require('http-errors');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { name, email } = req.body;
  const user = await User.findById(_id);
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  };
  const updatedUser = await User.findByIdAndUpdate(_id, { name, email }, { new: true });
  res.status(201).json({
    name: updatedUser.name,
  });
};

module.exports = updateUser;