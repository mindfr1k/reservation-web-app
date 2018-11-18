const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const { setupConnection } = require('./services/db-client')
const routes = require('./routes')

const { PORT, MONGO_URI, DB_NAME } = process.env
setupConnection(MONGO_URI, DB_NAME)

express()
  .use(morgan('dev'))
  .use(cors())
  .disable('x-powered-by')
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(routes)
  .use((_, res, __) => {
    return res.status(404).json({
      error: 'Resource was not found'
    })
  })
  .listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
  })