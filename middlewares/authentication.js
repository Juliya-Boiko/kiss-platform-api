const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { Unauthorized } = require('http-errors');

const authentication = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== 'Bearer') {
      throw new Unauthorized("Not authorized");
    };
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      throw new Error(`User with id=${id} not found`); 
    };
    req.user = user;
    next();
  } catch (error) {
    if (!error.status) {
      error.status = 401;
      error.message = "Not authorized";
    }
    next(error);
  }
};

module.exports = authentication;