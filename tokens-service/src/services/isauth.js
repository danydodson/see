const User = require('../models')


const isauth = async (req, res) => {
  res.send({ isauth: req.user || null })
}

module.exports = isauth
