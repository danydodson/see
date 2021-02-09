const services = require('./user')

module.exports = {
  create: services.create,
  signin: services.signin,
  getAll: services.getAll,
  getById: services.getById,
  update: services.update,
  delete: services.delete
}