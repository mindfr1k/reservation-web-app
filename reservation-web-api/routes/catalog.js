const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')
const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crud-catalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')
const deleteFile = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', checkAuth, upload('image'), validate(postCatalog), async (req, res) => {
    try {
      const { categoryName } = req.body
      const { title, preview, description } = req.payload
      const createdObject = (await db.collection(categoryName)
        .insertOne({
          title,
          path: req.file.path,
          preview,
          description
        })).ops[0]
      return res.status(201).json({
        message: 'Object was created successfully.',
        createdObject
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .get('/', validate(getCatalog), async (req, res) => {
    try {
      const { categoryName } = req.query
      const { skip, limit } = req.payload
      
      return res.status(200).json(await db.collection(categoryName)
        .find()
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .toArray()
      )
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .patch('/:id', checkAuth, upload('image'), validate(patchCatalog), async (req, res) => {
    try {
      const { categoryName } = req.body
      const { id } = req.params
      if (req.file) {
        const { path } = (await db.collection(categoryName)
          .find({
            _id: ObjectId(id)
          })
          .toArray())[0]
        deleteFile(path)
      }
      await db.collection(categoryName)
        .updateOne({
          _id: ObjectId(id)
        }, {
          $set: req.payload
        })
      return res.status(200).json({
        message: 'Object was updated successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .delete('/:id', checkAuth, async (req, res) => {
    try {
      const { categoryName } = req.body
      const { id } = req.params
      const { path } = (await db.collection(categoryName)
        .find({
          _id: ObjectId(id)
        })
        .toArray())[0]
      deleteFile(path)

      await db.collection(categoryName)
        .deleteOne({
          _id: ObjectId(id)
        })
      return res.status(200).json({
        message: 'Object was deleted successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .get('/amount', async (req, res) => {
    try {
      const { categoryName } = req.query
      return res.status(200).json((await db.collection(categoryName)
        .aggregate([
          {
            $count: 'categoryAmount'
          }
        ])
        .toArray())[0]
      )
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })