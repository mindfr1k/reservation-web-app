const Joi = require('joi')

module.exports = schema => {
  return (req, res, next) => {
    const { body, query, file = {} } = req
    const { error, value } = Joi.validate({
      ...body,
      ...query,
      ...file
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