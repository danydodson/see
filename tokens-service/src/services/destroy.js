const User = require('../models')


const destroy = async (id) => {
  await User.findByIdAndRemove(id)
}

module.exports = destroy

