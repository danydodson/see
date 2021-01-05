const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const passport = require('passport')
const app = express()

const keys = require('./config/keys')
const { env, url, port } = keys

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())

app.use(routes)

app.listen(port, () => {
  console.log(`[auth api] in (${env}) at localhost:${port}/${url.apiURL}`)
})