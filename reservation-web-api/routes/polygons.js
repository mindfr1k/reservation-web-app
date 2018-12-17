const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')
const validate = require('../services/validator')
const { postInhabitant}  = require('../schemas/crud-catalog')

module.exports = db => Router()
  .post('/', checkAuth, async (req, res) => {
    try {
      const { type, fillColor, coords } = req.body
      const createdPolygon = (await db.collection('polygons')
        .insertOne({
          type,
          fillColor,
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
  .get('/', async (_, res) => {
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
  .post('/:id/inhabitants', checkAuth, validate(postInhabitant), async (req, res) => {
    try {
      const { id } = req.params
      const { title, path } = req.payload
      await db.collection('polygons')
        .updateOne({
          _id: ObjectId(id)
        }, {
          $push: {
            inhabitants: {
              title,
              path
            }
          }
        })
      return res.status(201).json({
        message: 'Inhabitant was successfully created.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .delete('/:id/inhabitants', checkAuth, async (req, res) => {
    try {
      const { id } = req.params
      const { title, path } = req.body
      await db.collection('polygons')
        .updateOne({
          _id: ObjectId(id)
        }, {
          $pull: {
            inhabitants: {
              title,
              path
            }
          }
        })
      return res.status(200).json({
        message: 'Inhabitant was successfully deleted.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .get('/:id/inhabitants', checkAuth, async (req, res) => {
    try {
      const { id } = req.params
      return res.status(200).json(
        (await db.collection('polygons')
          .find({
            _id: ObjectId(id)
          })
          .project({
            _id: 0,
            inhabitants: 1
          })
          .toArray())[0]
      )
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })