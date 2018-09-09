const { Router } = require('express');

const validate = require('../services/validation.service');
const schemas = require('../validations');
const ctrls = require('../controllers');

module.exports = Router()
  .post('/animals', validate(schemas.animal.add), ctrls.animal.add);