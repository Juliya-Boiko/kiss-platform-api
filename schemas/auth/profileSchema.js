const Joi = require('joi');

const profileSchema = Joi.object({
  name: Joi.string().min(2).trim().required(),
  email: Joi.string().email().trim().required(),
});

module.exports = profileSchema;