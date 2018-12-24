const { Router } = require('express')
const { ObjectId } = require('mongodb')

const checkAuth = require('../services/auth-checker')
const { postNews, getNews, patchNews } = require('../schemas/news-catalog')
const validate = require('../services/validator')
const { uploadMany } = require('../services/uploader')
const { deleteFiles, deleteFile } = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', checkAuth, uploadMany('images'), validate(postNews), async (req, res) => {
    try {
      const { title, description } = req.payload
      const images = []
      for (file of req.files) {
        images.push(file.path)
      }
      const createdNews = (await db.collection('news')
        .insertOne({
          title,
          images,
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
  .patch('/:id', checkAuth, uploadMany('images'), validate(patchNews), async (req, res) => {
    try {
      const { id } = req.params
      if (req.files) {
        const { images } = (await db.collection('news')
          .find({
            _id: ObjectId(id)
          })
          .toArray())[0]
        deleteFiles(images)
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
      const { images } = (await db.collection('news')
        .find({
          _id: ObjectId(id)
        })
        .toArray())[0]
      //deleteFiles(images)

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
            $count: 'newsAmount'
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