const { Router } = require('express')

module.exports = Router()
  .get('/animals', (req, res) => {
    return res.status(200).json({
      message: 'Animals route works.'
    })
  })
  .get('/plants', (req, res) => {
    return res.status(200).json({
      message: 'Plants route works.'
    })
  })
  .get('/soils', (req, res) => {
    return res.status(200).json({
      message: 'Soils route works.'
    })
  })