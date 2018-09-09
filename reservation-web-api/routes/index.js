const { Router } = require('express');

const ctrls = require('../controllers');

module.exports = Router()
  .post('/animals', ctrls.animal.add);