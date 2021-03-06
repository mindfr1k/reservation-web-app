const Joi = require('joi')

module.exports = {
  postCatalog: Joi.object({
    title: Joi.string().required().max(100).regex(/^[^0-9]+$/),
    path: Joi.string().required(),
    preview: Joi.string().required().max(500),
    description: Joi.string().required().max(3000)
  }),
  getCatalog: Joi.object({
    limit: Joi.number().required().integer().min(0),
    skip: Joi.number().required().integer().min(0)
  }),
  patchCatalog: Joi.object({
    title: Joi.string().max(100).regex(/^[^0-9]+$/),
    path: Joi.string(),
    preview: Joi.string().max(500),
    description: Joi.string().max(3000)
  }).or('title', 'path', 'preview', 'description'),
  postInhabitant: Joi.object({
    title: Joi.string().required().max(100).regex(/^[^0-9]+$/),
    path: Joi.string().required()
  })
}