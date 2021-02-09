// const createPassword = require('../utils')
// const comparePassword = require('../utils')
const bcrypt = require('bcryptjs')
const User = require('../models')

exports.create = async (userParam) => {
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

exports.signin = async ({ username, password }) => {
  const user = await User.findOne({ username })

  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = { token: 'token' }
    return { ...user.toJSON(), token }
  }
}

exports.getAll = async () => {
  return await User.find()
}

exports.getById = async (id) => {
  return await User.findById(id)
}

exports.update = async (id, userParam) => {
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

exports.delete = async (id) => {
  await User.findByIdAndRemove(id)
}