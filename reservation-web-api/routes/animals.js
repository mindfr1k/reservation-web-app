const { Router } = require('express')
const { ObjectId } = require('mongodb')

const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crudCatalog')
const validate = require('../services/validator')
const upload = require('../services/uploader')

module.exports = db => Router()
  .post('/', upload('image'), validate(postCatalog), async (req, res) => {
    const { title, preview, description } = req.payload
    const savedAnimal = (await db.collection('animals').insertOne({
      title,
      image: req.file.path,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Animal was created successfully',
      savedAnimal
    })
  })
  .get('/', validate(getCatalog), async (req, res) => {
    const { skip, limit } = req.payload
    return res.status(200).json(await db.collection('animals')
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', validate(patchCatalog), async (req, res) => {
    const { id } = req.params
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
    await db.collection('animals')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Animal was deleted successfully'
    })
  })