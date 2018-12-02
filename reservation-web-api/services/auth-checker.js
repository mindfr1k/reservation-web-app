const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const { JWT_SECRET_KEY } = process.env
    req.user = jwt.verify(req.headers.authorization.split(' ')[1], JWT_SECRET_KEY)
    next()
  }
  catch (err) {
    return res.status(401).json({
      message: 'Token authorization failed.'
    })
  }
}