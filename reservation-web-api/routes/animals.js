const { Router } = require('express')
const { ObjectId } = require('mongodb')

module.exports = db => Router()
  .post('/', async (req, res) => {
    const { title, preview, description } = req.body
    const savedAnimal = (await db.collection('animals').insertOne({
      title,
      preview,
      description
    })).ops[0]

    return res.status(201).json({
      message: 'Animal was created successfully',
      savedAnimal
    })
  })
  .get('/', async (req, res) => {
    const { skip, limit } = req.query
    return res.status(200).json(await db.collection('animals')
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray()
    )
  })
  .patch('/:id', async (req, res) => {
    const { id } = req.params
    await db.collection('animals')
    .updateOne({
      _id: ObjectId(id)
    }, {
      $set: req.body
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