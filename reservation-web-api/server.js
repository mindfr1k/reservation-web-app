const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const { join } = require('path')

require('dotenv').config()
const { setupConnection } = require('./services/db-client')
const initRoutes = require('./routes')
const setupNuxt = require('./services/setup-nuxt')

;(async () => {
  try {
    const { PORT, PROD_MONGO_URI, PROD_DB_NAME } = process.env
    const db = await setupConnection(PROD_MONGO_URI, PROD_DB_NAME)

    express()
      .use(morgan('dev'))
      .use(cors())
      .disable('x-powered-by')
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use('/reservation-web-api/static/images', express.static(join('reservation-web-api', 'static', 'images')))
      .use(initRoutes(db))
      .use('/', setupNuxt)
      .use((_, res, __) => {
        return res.status(404).json({
          error: 'Resource was not found'
        })
      })
      .listen(PORT, () => {
        console.log(`\nServer runs on port ${PORT}\n`)
      })
  }
  catch (err) {
    console.log(err)
  }
})()