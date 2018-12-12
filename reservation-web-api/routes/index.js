const { Router } = require('express')

const catalogRoutes = require('./catalog')
const userRoutes = require('./users')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))
  .use('/users', userRoutes(db))