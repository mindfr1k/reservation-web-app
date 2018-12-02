const bcrypt = require('bcrypt')

module.exports = {
  protectField(field) {
    return bcrypt.hashSync(field, 10)
  },
  checkField(originField, cryptedField) {
    return bcrypt.compareSync(originField, cryptedField)
  }
} 