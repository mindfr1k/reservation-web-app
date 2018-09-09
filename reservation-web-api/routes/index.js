const { Router } = require('express');

const { validate, upload } = require('../services');
const schemas = require('../validations');
const ctrls = require('../controllers');

module.exports = Router()
  .post('/animals', upload('photo'), validate(schemas.animal.add), ctrls.animal.add);