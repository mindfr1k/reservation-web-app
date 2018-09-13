const { Router } = require('express');

const { validate, upload } = require('../services');
const schemas = require('../validations');
const ctrls = require('../controllers');

module.exports = Router()
  .get('/animals/:page', validate(schemas.animal.getList), ctrls.animal.getList)
  .post('/animals', upload('photo'), validate(schemas.animal.add), ctrls.animal.add);