const Joi = require('joi');

const sighupSchema = Joi.object({
  name: Joi.string().min(2).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).max(15).trim().pattern(/^[a-zA-Z0-9]{3,30}$/).required()
});

module.exports = sighupSchema;