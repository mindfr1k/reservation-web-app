const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const { setupConnection } = require('./services/db-client')
const initRoutes = require('./routes')

;(async () => {
  try {
    require('dotenv').config()
    const { PORT, MONGO_URI, DB_NAME } = process.env
    const db = await setupConnection(MONGO_URI, DB_NAME)

    express()
      .use(morgan('dev'))
      .use(cors())
      .disable('x-powered-by')
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(initRoutes(db))
      .use((_, res, __) => {
        return res.status(404).json({
          error: 'Resource was not found'
        })
      })
      .listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`)
      })
  }
  catch (err) {
    console.log(err)
  }
})()