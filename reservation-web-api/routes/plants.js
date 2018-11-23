const { Router } = require('express')
const { ObjectId } = require('mongodb')

const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crudCatalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')
const deleteFile = require('../services/file-deleter')

module.exports = db => Router()
  .post('/', upload('image'), validate(postCatalog), async (req, res) => {
    const { title, preview, description } = req.payload
    const createdPlant = (await db.collection('plants').insertOne({
      title,
      path: req.file.path,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Plant was created successfully',
      createdPlant
    })
  })
  .get('/', validate(getCatalog), async (req, res) => {
    const { skip, limit } = req.payload
    return res.status(200).json(await db.collection('plants')
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', upload('image'), validate(patchCatalog), async (req, res) => {
    const { id } = req.params
    if (req.file) {
      const plant = (await db.collection('plants')
      .find({
        _id: ObjectId(id)
      }).toArray())[0]
      deleteFile(plant.image)
    }
    await db.collection('plants')
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.payload
    })
    return res.status(200).json({
      message: 'Plant was updated successfully'
    })
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    const plant = (await db.collection('plants')
    .find({
      _id: ObjectId(id)
    }).toArray())[0]
    deleteFile(plant.image)
    await db.collection('plants')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Plant was deleted successfully'
    })
  })