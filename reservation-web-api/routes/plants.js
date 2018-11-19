const { Router } = require('express')
const { ObjectId } = require('mongodb')

const validate = require('../services/validator')
const { postCatalog, getCatalog, patchCatalog } = require('../schemas/crudCatalog')

module.exports = db => Router()
  .post('/', validate(postCatalog), async (req, res) => {
    const { title, preview, description } = req.payload
    const savedAnimal = (await db.collection('plants').insertOne({
      title,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Plant was created successfully',
      savedAnimal
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
  .patch('/:id', validate(patchCatalog), async (req, res) => {
    const { id } = req.params
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
    await db.collection('plants')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Plant was deleted successfully'
    })
  })