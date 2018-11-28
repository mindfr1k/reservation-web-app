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
    const { id } = req.params
    if (req.file) {
      const animal = (await db.collection('animals')
      .find({
        _id: ObjectId(id)
      }).toArray())[0]
      deleteFile(animal.path)
    }

    await db.collection('animals')
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.payload
    })
    return res.status(200).json({
      message: 'Animal was updated successfully'
    })
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    const animal = (await db.collection('animals')
    .find({
      _id: ObjectId(id)
    }).toArray())[0]
    deleteFile(animal.path)
    await db.collection('animals')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Animal was deleted successfully'
    })
  })