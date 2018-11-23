const Joi = require('joi')

module.exports = {
  postCatalog: Joi.object({
    title: Joi.string().required().max(100).regex(/^[^0-9]+$/),
    path: Joi.string().required(),
    preview: Joi.string().required().max(200),
    description: Joi.string().required().max(500)
  }),
  getCatalog: Joi.object({
    limit: Joi.number().required().integer().min(0),
    skip: Joi.number().required().integer().min(0)
  }),
  patchCatalog: Joi.object({
    title: Joi.string().max(100).regex(/^[^0-9]+$/),
    path: Joi.string(),
    preview: Joi.string().max(200),
    description: Joi.string().max(500)
  }).or('title', 'path', 'preview', 'description')
}