const multer = require('multer')
const { join } = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join('reservation-web-api', 'static', 'images'))
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}-${file.originalname}`)
  }
})

const limits = {
  fileSize: 1024 * 1024 * 3
}

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png'
    || file.mimetype === 'image/jng'
    || file.mimetype === 'image/jpeg') {
    cb(null, true)
  }
  else {
    cb(null, false)
  }
}

module.exports = file => {
  return multer({
    storage,
    limits,
    fileFilter
  }).single(file)
}