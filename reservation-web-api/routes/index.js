const { Router } = require('express')

const animalRoutes = require('./animals')
const plantRoutes = require('./plants')
const soilRoutes = require('./soils')

module.exports = db => Router()
  .use('/animals', animalRoutes(db))
  .use('/plants', plantRoutes(db))
  .use('/soils', soilRoutes(db))