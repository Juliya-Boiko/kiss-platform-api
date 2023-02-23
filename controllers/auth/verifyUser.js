const User = require('../../models/user');
const { Unauthorized, BadRequest } = require('http-errors');
const { sendMail, verifyCode } = require('../../helpers');

const verifyUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized("Email is wrong");
  };
  if (user.verificationToken) {
    throw new BadRequest('Varification token sended. Check email')
  }
  const verificationToken = verifyCode();
  await User.findByIdAndUpdate(user._id, { verificationToken }, { new: true });
  
  const mail = {
    to: email,
    subject: "Verification code",
    html: `<p>Verification code: ${verificationToken}</p>`
  };
  await sendMail(mail);
  
  res.status(200).json();
};

module.exports = verifyUser;