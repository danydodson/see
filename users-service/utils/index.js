const bcrypt = require('bcryptjs')

const hashPassword = async (password) => {
  const saltRounds = 10
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })
  return hashedPassword
}

const cache = {}

const accessEnv = (key, def) => {
  if (!(key in process.env)) {
    if (def) return def
    throw new Error(`${key} not found in .env!`)
  }
  if (cache[key]) return cache[key]
  cache[key] = process.env[key]
  return process.env[key]
}

module.exports = { hashPassword, accessEnv }