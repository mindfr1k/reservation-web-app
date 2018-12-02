const { Router } = require('express')

module.exports = db => Router()
  .post('/signup', async (req, res) => {
    const { username, password, adminKey } = req.body
  })
  .post('/signin', )
  .get('/', async (_, res) => {
    return res.status(200).json(await db.collection('users')
      .find()
      .toArray())
  })