const bcrypt = require('bcryptjs')
const User = require('../models')


const signup = async (userParam) => {
  if (await User.findOne({ username: userParam.username })) {
    throw `Username ${userParam.username} is already taken`
  }

  const user = new User(userParam)

  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10)
  }

  await user.save()
  return user.toJSON()
}

module.exports = signup