const error = require('./error')
const password = require('./password')

module.exports = {
  handler: error.handler,
  hash: password.hash,
  compare: password.compare
}