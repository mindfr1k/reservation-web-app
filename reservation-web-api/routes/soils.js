const { Router } = require('express')
const { ObjectId } = require('mongodb')

module.exports = db => Router()
  .post('/', async (req, res) => {
    const { title, preview, description } = req.body
    const savedAnimal = (await db.collection('soils').insertOne({
      title,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Soil was created successfully',
      savedAnimal
    })
  })
  .get('/', async (req, res) => {
    const { skip, limit } = req.query
    return res.status(200).json(await db.collection('soils')
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', async (req, res) => {
    const { id } = req.params
    await db.collection('soils')
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.body
    })
    return res.status(200).json({
      message: 'Soil was updated successfully'
    })
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    await db.collection('soils')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'Soil was deleted successfully'
    })
  })