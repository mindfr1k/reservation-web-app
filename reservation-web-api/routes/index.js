const { Router } = require('express')

const catalogRoutes = require('./catalog')
const userRoutes = require('./users')
const polygonRoutes = require('./polygons')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))
  .use('/users', userRoutes(db))
  .use('/polygons', polygonRoutes(db))