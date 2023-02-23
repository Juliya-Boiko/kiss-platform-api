const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().required(),
});

module.exports = loginSchema;