const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const { Conflict, Unauthorized } = require('http-errors');

const signupUSer = async (req, res) => {
  const { name, email, password } = req.body;
  const avatar = gravatar.url(name, { s: '250' });
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  };
  const hashPassword = await bcrypt.hash(password, 10);
  
  await User.create({ name, email, password: hashPassword, avatar });

  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    throw new Unauthorized("User didnt exist. Repeat registration");
  };
  const payload = {
    id: checkUser._id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3h" });
  const updatedUser = await User.findByIdAndUpdate(checkUser._id, { token }, { new: true });

  res.status(201).json({
    userId: updatedUser._id,
    name: updatedUser.name,
    token: updatedUser.token,
    avatar: updatedUser.avatar
  });
};

module.exports = signupUSer;