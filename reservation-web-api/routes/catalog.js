const { Router } = require('express')
const { ObjectId } = require('mongodb')

const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crudCatalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')
const deleteFile = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', upload('image'), validate(postCatalog), async (req, res) => {
    const { categoryName } = req.body
    const { title, preview, description } = req.payload
    const createdObject = (await db.collection(categoryName).insertOne({
      title,
      path: req.file.path,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Object was created successfully',
      createdObject
    })
  })
  .get('/', validate(getCatalog), async (req, res) => {
    const { categoryName } = req.query
    const { skip, limit } = req.payload
    
    return res.status(200).json(await db.collection(categoryName)
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', upload('image'), validate(patchCatalog), async (req, res) => {
    const { categoryName } = req.body
    const { id } = req.params
    if (req.file) {
      const object = (await db.collection(categoryName)
      .find({
        _id: ObjectId(id)
      })
      .toArray())[0]
      deleteFile(object.path)
    }

    await db.collection(categoryName)
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.payload
    })
    return res.status(200).json({
      message: 'Object was updated successfully'
    })
  })
  .delete('/:id', async (req, res) => {
    const { categoryName } = req.body
    const { id } = req.params
    const object = (await db.collection(categoryName)
    .find({
      _id: ObjectId(id)
    })
    .toArray())[0]
    deleteFile(object.path)

    await db.collection(categoryName)
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Object was deleted successfully'
    })
  })
  .get('/amount', async (req, res) => {
    const { categoryName } = req.query
    return res.status(200).json((await db.collection(categoryName)
      .aggregate([
        {
          $count: 'categoryAmount'
        }
      ])
      .toArray())[0]
    )
  })