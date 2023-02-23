const Joi = require('joi');

const updateSchema = Joi.object({
  password: Joi.string().min(6).max(15).trim().pattern(/^[a-zA-Z0-9]{3,30}$/).required()
});

module.exports = updateSchema;