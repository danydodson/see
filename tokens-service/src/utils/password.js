const bcrypt = require('bcryptjs')

const hash = (input) => {
  return bcrypt.hashSync(input, 10)
}

const compare = (input,, hash) => {
  return bcrypt.compareSync(input, hash)
}

module.exports = { hash, compare }

