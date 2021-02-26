const isauth = require('./isauth')
const signup = require('./signup')
const signin = require('./signin')
const update = require('./update')
const logout = require('./logout')
const destroy = require('./destroy')

module.exports = {
  isauth: isauth,
  signup: signup,
  signin: signin,
  update: update,
  logout: logout,
  destroy: destroy
}