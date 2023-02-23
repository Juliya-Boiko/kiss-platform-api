const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  };
  const passCompare = await bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized("Password is wrong");
  };
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" });
  const updatedUser = await User.findByIdAndUpdate(user._id, { token }, { new: true });
  res.status(200).json({
    userId: updatedUser._id,
    name: updatedUser.name,
    token: updatedUser.token,
    avatar: updatedUser.avatar
  });
};

module.exports = loginUser;