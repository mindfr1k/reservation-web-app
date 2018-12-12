const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')

module.exports = db => Router()
  .post('/', checkAuth, async (req, res) => {
    const { type, fillColor, inhabitants, coords } = req.body
    const createdPolygon = (await db.collection('polygons')
      .insertOne({
        type,
        fillColor,
        inhabitants,
        coords
      })).ops[0]
    return res.status(201).json({
      message: 'Polygon was created successfully.',
      createdPolygon
    })
  })
  .get('/', checkAuth, async (_, res) => {
    return res.status(200).json(await db.collection('polygons')
      .find()
      .toArray())
  })