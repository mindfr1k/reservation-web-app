const Joi = require('joi');

module.exports = {
  add: Joi.object({
    name: Joi.string().required().max(50),
    description: Joi.string().required().max(300),
    photo: Joi.object().required()
  }),
  getList: Joi.object({
    page: Joi.number().min(1).integer().default(1),
    filter: Joi.string().default('')
  })
};