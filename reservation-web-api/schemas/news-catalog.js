const Joi = require('joi')

module.exports = {
  postNews: Joi.object({
    title: Joi.string().required().max(100),
    path: Joi.string().required(),
    description: Joi.string().required().max(3000)
  }),
  getNews: Joi.object({
    limit: Joi.number().required().integer().min(0),
    skip: Joi.number().required().integer().min(0)
  }),
  patchNews: Joi.object({
    title: Joi.string().max(100),
    path: Joi.string(),
    description: Joi.string().max(3000)
  }).or('title', 'path', 'description'),
}