const { Router } = require('express')
const { ObjectId } = require('mongodb')

const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crudCatalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')
const deleteFile = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', upload('image'), validate(postCatalog), async (req, res) => {
    const { title, preview, description } = req.payload
    const createdAnimal = (await db.collection('soils').insertOne({
      title,
      path: req.file.path,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Soil was created successfully',
      createdAnimal
    })
  })
  .get('/', validate(getCatalog), async (req, res) => {
    const { skip, limit } = req.payload
    return res.status(200).json(await db.collection('soils')
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', upload('image'), validate(patchCatalog), async (req, res) => {
    const { id } = req.params
    if (req.file) {
      const animal = (await db.collection('soils')
      .find({
        _id: ObjectId(id)
      }).toArray())[0]
      deleteFile(animal.path)
    }

    await db.collection('soils')
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.payload
    })
    return res.status(200).json({
      message: 'Soil was updated successfully'
    })
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    const animal = (await db.collection('soils')
    .find({
      _id: ObjectId(id)
    }).toArray())[0]
    deleteFile(animal.path)
    await db.collection('soils')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Soil was deleted successfully'
    })
  })