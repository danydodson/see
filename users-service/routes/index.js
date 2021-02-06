const router = require('express').Router()
const userRoutes = require('./users')

const api = process.env.API_PATH

const apiPath = `/${api}`

router.use(apiPath, userRoutes)
router.use(apiPath, (req, res) => res.status(404).json('No API route found'))

module.exports = router
