const { Router } = require('express')
const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')

const checkAuth = require('../services/auth-checker')
const checkSign = require('../services/sign-checker')
const { protectField, checkField } = require('../services/field-protector')
const { signUp, signIn } = require('../schemas/user-handling')
const validate = require('../services/validator')

module.exports = db => Router()
  .post('/signup', checkAuth, validate(signUp), async (req, res) => {
    try {
      const { username, password, adminKey } = req.payload
      const user = (await db.collection('users')
        .find({
          username
        })
        .toArray())[0]
      if (user) {
        return res.status(422).json({
          message: 'Such user already exists.'
        })
      }
      await db.collection('users')
        .insertOne({
          username,
          password: protectField(password),
          adminKey: protectField(adminKey)
        })
      return res.status(201).json({
        message: 'User was created successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .post('/signin', validate(signIn), async (req, res) => {
    try {
      const { username, password } = req.payload
      const user = (await db.collection('users')
        .find({
          username
        })
        .toArray())[0]
      if (!user) {
        return res.status(401).json({
          message: 'This user is not authorized.'
        })
      }
      const decypheredPassword = checkField(password, user.password)
      if (!decypheredPassword) {
        return res.status(401).json({
          message: 'This user is not authorized.'
        })
      }
      const { JWT_SECRET_KEY } = process.env
      const token = jwt.sign({
        username
      }, JWT_SECRET_KEY)
      return res.status(200).json({
        message: 'User was signed in successfully.',
        token
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .get('/', checkAuth, async (_, res) => {
    try {
      return res.status(200).json(await db.collection('users')
        .find()
        .project({
          password: 0
        })
        .toArray()
      )
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .delete('/:id', checkAuth, async (req, res) => {
    try {
      const { id } = req.params
      await db.collection('users')
        .deleteOne({
          _id: ObjectId(id)
        })
      return res.status(200).json({
        message: 'User was deleted successfully.'
      })
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })
  .get('/checkAccess', checkSign, async (req, res) => {
    try {
      const { username } = req.user
      const user = await db.collection('users')
        .find({
          username
        })
      if (user) {
        return res.status(200).json(true)
      }
      return res.status(404).json(false)
    }
    catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  })