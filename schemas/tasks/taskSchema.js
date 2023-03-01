const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(5).trim().required(),
  descr: Joi.string().trim().required(),
  status: Joi.string().valid('in progress', 'done', 'paused', 'urgently')
});

module.exports = taskSchema;