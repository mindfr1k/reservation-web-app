const Joi = require('joi');

module.exports = {
  add: Joi.object({
    name: Joi.string().required().token().max(50),
    description: Joi.string().required().max(300),
    photo: Joi.string().required().max(300)
  })
};