const fs = require('fs')

module.exports = {
  deleteFile(file) {
    fs.unlink(file, err => {
      if (err) {
        throw (err.message)
      }
    })
  },
  deleteFiles(files) {
    files.forEach(file => {
      fs.unlink(file, err => {
        if (err) {
          throw (err.message)
        }
      })
    })
  }
}