const { Router } = require('express')

const catalogRoutes = require('./catalog')
const userRoutes = require('./user-routes')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))
  .use('/users', userRoutes(db))