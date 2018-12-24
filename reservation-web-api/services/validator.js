const Joi = require('joi')

module.exports = schema => {
  return (req, res, next) => {
    const { body, query, file = {} } = req
    const images = []
    if (req.files) {
      for (let image of req.files) {
        images.push(image.path)
      }
    }
    const { error, value } = Joi.validate({
      ...body,
      ...query,
      ...file,
      images
    }, schema, {
      stripUnknown: true,
      allowUnknown: true
    })
    if (error) {
      return res.status(400).json(
        error.details.map(err => ({
          key: err.context.key,
          message: err.message
        }))
      )
    }
    req.payload = value
    next()
  }
}