const { Router } = require('express')

const catalogRoutes = require('./catalog')
const userRoutes = require('./userRoutes')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))
  .use('/users', userRoutes(db))