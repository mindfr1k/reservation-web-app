const Joi = require('joi')

module.exports = schema => {
  return (req, res, next) => {
    const { body, query } = req
    const image = req.file === undefined ? null : req.file.path
    const { error, value } = Joi.validate({
      ...body,
      ...query,
      image
    }, schema, {
      stripUnknown: true
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