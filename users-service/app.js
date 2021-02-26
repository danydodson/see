require('dotenv').config()

const express = require('express')
const cors = require('cors')
const error = require('./utils/errors')
const routes = require('./routes')
const conf = require('./config')
const app = express()

process.env.NODE_ENV === 'development'

const startDatabase = require('./config/db')
startDatabase()

app.enable('trust proxy')
app.use(cors())
app.use(express.json())

app.use(routes)
app.use(error.handler)

const details = `[users api]✔️(${conf.env})⭐http://${conf.host}:${conf.port}/${conf.prefix}`

app.listen(conf.port, () => {
  console.info(details)
})