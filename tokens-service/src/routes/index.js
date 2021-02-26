const router = require('express').Router()
const ctrl = require('../controller')

const api = '/api/v1/auth'

const routes = () => {
  router
    .get('/isauth', ctrl.isauth)
  router
    .post('/signup', ctrl.signup)
  router
    .post('/signin', ctrl.signin)
  router
    .put('/update', ctrl.update)
  router
    .post('/logout', ctrl.logout)
  router
    .delete('/destroy', ctrl.destroy)
}

router
  .use(api, routes)

router
  .use(api, (req, res) => res.status(404).json('no route found'))

module.exports = router

