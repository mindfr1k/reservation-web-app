const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

module.exports = express()
  .use(morgan('dev'))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', routes)
  .use((req, res) => {
    return res.status(404).json({
      message: 'Resource was not found'
    });
  });