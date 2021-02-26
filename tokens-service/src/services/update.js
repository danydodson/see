const bcrypt = require('bcryptjs')
const User = require('../models')


const update = async (id, userParam) => {

  const user = await User.findById(id)

  if (!user) throw 'User not found'
  if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken'
  }

  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10)
  }

  Object.assign(user, userParam)

  await user.save()
  return user.toJSON()
}

module.exports = update

