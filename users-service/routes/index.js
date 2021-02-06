const router = require('express').Router()
const routes = require('./users')

const apiPath = process.env.API_PATH

const api = `/${apiPath}`

router.use(api, routes)
router.use(api, (req, res) => res.status(404).json('No API route found'))

module.exports = router
