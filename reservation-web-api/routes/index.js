const { Router } = require('express')

const catalogRoutes = require('./catalog')
const userRoutes = require('./users')
const polygonRoutes = require('./polygons')
const newsRoutes = require('./news')

module.exports = db => Router()
  .use('/categories', catalogRoutes(db))
  .use('/users', userRoutes(db))
  .use('/polygons', polygonRoutes(db))
  .use('/news', newsRoutes(db))