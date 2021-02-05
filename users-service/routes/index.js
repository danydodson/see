const router = require('express').Router()
const apiRoutes = require('./users')

const api = process.env.API_PATH

const apiPath = `/${api}`

router.use(apiPath, apiRoutes)
router.use(apiPath, (req, res) => res.status(404).json('No API route found'))

module.exports = router
