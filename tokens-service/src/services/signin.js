const bcrypt = require('bcryptjs')
const User = require('../models')


const signin = async ({ username, password }) => {
  const user = await User.findOne({ username })

  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = { token: 'token' }
    return { ...user.toJSON(), token }
  }
}

module.exports = signin