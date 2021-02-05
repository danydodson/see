const router = require('express').Router()
const apiRoutes = require('./users')

const { api_url } = require('../config')

const api = `/${api_url}`

router.use(api, apiRoutes)
router.use(api, (req, res) => res.status(404).json('No API route found'))

module.exports = router
