const User = require('../../models/user');
const { Unauthorized } = require('http-errors');

const getUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized("Email is wrong");
  };
  
  res.status(200).json({
    userId: user._id,
    verificationToken: user.verificationToken
  });
};

module.exports = getUser;