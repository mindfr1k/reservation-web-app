const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')
const { postNews, getNews, patchNews } = require('../schemas/news-catalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')
const deleteFile = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', checkAuth, upload('image'), validate(postNews), async (req, res) => {
    try {
      const { title, description } = req.payload
      const createdNews = (await db.collection('news')
        .insertOne({
          title,
          path: req.file.path,
          description
        })).ops[0]
      return res.status(201).json({
        message: 'News was created successfully.',
        createdNews
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .get('/', validate(getNews), async (req, res) => {
    try {
      const { skip, limit } = req.payload
      return res.status(200).json(await db.collection('news')
        .find()
        .sort({
          _id: -1
        })
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .toArray()
      )
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .patch('/:id', checkAuth, upload('image'), validate(patchNews), async (req, res) => {
    try {
      const { id } = req.params
      if (req.file) {
        const { path } = (await db.collection('news')
          .find({
            _id: ObjectId(id)
          })
          .toArray())[0]
        deleteFile(path)
      }
      await db.collection('news')
        .updateOne({
          _id: ObjectId(id)
        }, {
          $set: req.payload
        })
      return res.status(200).json({
        message: 'News was updated successfully.'
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
      const { path } = (await db.collection('news')
        .find({
          _id: ObjectId(id)
        })
        .toArray())[0]
      deleteFile(path)

      await db.collection('news')
        .deleteOne({
          _id: ObjectId(id)
        })
      return res.status(200).json({
        message: 'News was deleted successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err.message
      })
    }
  })
  .get('/amount', async (_, res) => {
    try {
      return res.status(200).json((await db.collection('news')
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
        error: err.message
      })
    }
  })