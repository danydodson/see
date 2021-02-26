const services = require('../services')

const isauth = async (req, res, next) => {
  await services.isauth(req.user)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err))
}

const signup = async (req, res, next) => {
  await services.create(req.body)
    .then((user) => res.json(user))
    .catch(err => next(err))
}

const signin = async (req, res, next) => {
  await services.signin(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

const logout = async (req, res, next) => {
  await services.logout(req.user)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

const update = async (req, res, next) => {
  await services.update(req.user._id, req.body)
    .then((user) => res.json(user))
    .catch(err => next(err))
}

const destroy = async (req, res, next) => {
  await services.delete(req.user._id)
    .then(() => res.json({ msg: 'user deleted' }))
    .catch(err => next(err))
}

module.exports = {
  isauth: isauth,
  signup: signup,
  signin: signin,
  update: update,
  logout: logout,
  destroy: destroy,
}