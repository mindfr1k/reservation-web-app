const { Router } = require('express')

const catalogRoutes = require('./catalog')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))