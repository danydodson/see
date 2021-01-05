const router = require('express').Router()
const apiRoutes = require('./users')

const { api_uri } = require('../config')

const api = `/${api_uri}`

router.use(api, apiRoutes)
router.use(api, (req, res) => res.status(404).json('No API route found'))

module.exports = router
