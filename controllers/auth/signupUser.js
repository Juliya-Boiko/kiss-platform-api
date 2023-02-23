// const User = require('../../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { Conflict, Unauthorized } = require('http-errors');

const signupUSer = async (req, res) => {
  res.status(201).json({
    data: req.body
  });

  // const { name, email, password } = req.body;
  // const user = await User.findOne({ email });
  // if (user) {
  //   throw new Conflict("Email in use");
  // };
  // const hashPassword = await bcrypt.hash(password, 10);
  // await User.create({ name, email, password: hashPassword });

  // // ================= TOKEN Add
  // const reloadUser = await User.findOne({ email });
  // if (!reloadUser) {
  //   throw new Unauthorized("User didnt exist");
  // };
  // const payload = {
  //   id: reloadUser._id,
  // };
  // const token = jwt.sign(payload, 'SECRET_KEY', { expiresIn: "3h" });
  // const updatedUser = await User.findByIdAndUpdate(reloadUser._id, { token }, { new: true });
  // // ============================

  // res.status(201).json({
  //   userId: updatedUser._id,
  //   name: updatedUser.name,
  //   token: updatedUser.token,
  // });
};

module.exports = signupUSer;