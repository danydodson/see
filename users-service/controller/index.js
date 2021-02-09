const controllers = require('./users')

module.exports = {
  signin: controllers.signin,
  register: controllers.register,
  getAll: controllers.getAll,
  getCurrent: controllers.getCurrent,
  getById: controllers.getById,
  update: controllers.update,
  destroy: controllers.destroy
}