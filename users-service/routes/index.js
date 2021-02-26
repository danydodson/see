const router = require('express').Router()
const routes = require('./users')
const conf = require('../config')

const api = `${conf.prefix}`

router.use(api, routes)
router.use(api, (req, res) => res.status(404).json('No API route found'))

module.exports = router
