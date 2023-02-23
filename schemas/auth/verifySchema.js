const Joi = require('joi');

const verifySchema = Joi.object({
  email: Joi.string().email().trim().required(),
});

module.exports = verifySchema;