const Joi = require('joi')

module.exports = {
  postCatalog: Joi.object({
    title: Joi.string().required().max(100).regex(/^[^0-9]+$/),
    preview: Joi.string().required().max(200),
    description: Joi.string().required().max(500)
  }),
  getCatalog: Joi.object({
    limit: Joi.number().required().integer().positive(),
    skip: Joi.number().required().integer().positive()
  }),
  patchCatalog: Joi.object({
    title: Joi.string().max(100).regex(/^[^0-9]+$/),
    preview: Joi.string().max(200),
    description: Joi.string().max(500)
  }).or('title', 'preview', 'description')
}