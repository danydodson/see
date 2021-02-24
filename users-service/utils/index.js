const errors = require('./errors')
const validate = require('./validate')

module.exports = {
  errorHandler: errors.errorHandler,
  validateEmail: validate.isEmail
}