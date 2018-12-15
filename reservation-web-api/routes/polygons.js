const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')

module.exports = db => Router()
  .post('/', checkAuth, async (req, res) => {
    try {
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
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .get('/', checkAuth, async (_, res) => {
    try {
      return res.status(200).json(await db.collection('polygons')
        .find()
        .toArray())
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .patch('/:id', checkAuth, async (req, res) => {
    try {
      const { id } = req.params
      await db.collection('polygons')
        .updateOne({
          _id: ObjectId(id)
        }, {
          $set: req.body
        })
      return res.status(200).json({
        message: 'Polygon was updated successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .delete('/:id', checkAuth, async (req, res) => {
    try {
      const { id } = req.params
      await db.collection('polygons')
        .deleteOne({
          _id: ObjectId(id)
        })
      return res.status(200).json({
        message: 'Polygon was deleted successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })