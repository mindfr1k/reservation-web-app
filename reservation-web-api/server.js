const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const { PORT } = process.env

express()
  .use(morgan('dev'))
  .use(cors())
  .disable('x-powered-by')
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use((_, res, __) => {
    return res.status(400).json({
      error: 'Resource was not found'
    })
  })
  .listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
  })