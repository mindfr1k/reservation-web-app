const { Router } = require('express')
const { ObjectId } = require('mongodb')

const { protectField } = require('../services/field-protector')

module.exports = db => Router()
  .post('/signup', async (req, res) => {
    const { username, password, adminKey } = req.body
    const user = (await db.collection('users')
    .find({
      username: username
    }).toArray())[0]
    if (user) {
      return res.status(422).json({
        message: 'Such user already exists.'
      })
    }
    await db.collection('users')
    .insertOne({
      username,
      password: protectField(password),
      adminKey
    })
    return res.status(201).json({
      message: 'User was created successfully.'
    })
  })
  .post('/signin', )
  .get('/', async (_, res) => {
    return res.status(200).json(await db.collection('users')
    .find()
    .project({
      password: 0
    })
    .toArray()
    )
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params
    await db.collection('users')
    .deleteOne({
      _id: ObjectId(id)
    })
    return res.status(200).json({
      message: 'User was deleted successfully.'
    })
  })