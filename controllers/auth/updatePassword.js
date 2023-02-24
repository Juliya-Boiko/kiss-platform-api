const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const updatePassword = async (req, res) => {
  const { password } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  };

  const hashPassword = await bcrypt.hash(password, 10);
  const payload = {
    id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" });

  const updatedUser = await User.findByIdAndUpdate(id, { password: hashPassword, token, verificationToken: null }, { new: true });

  res.status(201).json({
    userId: updatedUser._id,
    name: updatedUser.name,
    token: updatedUser.token,
    avatar: updatedUser.avatar
  });
};

module.exports = updatePassword;