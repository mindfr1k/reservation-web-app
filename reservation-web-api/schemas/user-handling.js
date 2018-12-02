const Joi = require('joi')

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/

module.exports = {
  userProfile: Joi.object({
    username: Joi.string().required().max(50),
    password: Joi.string().required().regex(passwordPattern),
    adminKey: Joi.string().disallow(Joi.ref('password')).required().regex(passwordPattern)
  })
}