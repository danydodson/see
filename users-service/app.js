require('dotenv').config()

const express = require('express')
const cors = require('cors')
const err = require('./utils')
const app = express()
const routes = require('./routes')

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'

const mongoConnection = require('./config')
mongoConnection(env)

app.enable('trust proxy')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(err.errorHandler)

const host = process.env.HOST
const port = process.env.PORT
const path = process.env.API_PATH

app.listen(port, () => {
  console.info(`[users api]✔️(${env})⭐http://${host}:${port}/${path}`)
})