require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'

const mongoConnection = require('./config')
mongoConnection(env)

app.use(cors())
app.use(express.json())
app.use(routes)

const host = process.env.HOST
const port = process.env.PORT
const api = process.env.API_PATH

app.listen(port, () => {
  console.info(`[users api]✔️(${env})⭐http://${host}:${port}/${api}`)
})

