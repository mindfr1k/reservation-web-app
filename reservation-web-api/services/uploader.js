const multer = require('multer')
const { join } = require('path')

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, join('reservation-web-api', 'static', 'images'))
  },
  filename: (_, file, cb) => {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    cb(null, `${timestamp}-${file.originalname}`)
  }
})

const limits = {
  fileSize: 1024 * 1024 * 3
}

const fileFilter = (_, file, cb) => {
  if (file.mimetype === 'image/png'
    || file.mimetype === 'image/jpg'
    || file.mimetype === 'image/jpeg') {
    cb(null, true)
  }
  else {
    cb(null, false)
  }
}

module.exports = {
  uploadOne(file) {
    return multer({
      storage,
      limits,
      fileFilter
    }).single(file)
  },
  uploadMany(file) {
    return multer({
      storage,
      limits,
      fileFilter
    }).array(file, 4)
  }
}