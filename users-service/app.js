require('dotenv-safe').config()

const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

const { env, host, port, api_uri } = require('./config')
const mongoose = require('./config/db')

mongoose.connect()

app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`[users api]✔️ (${env}) http://${host}:${port}/${api_uri}`)
})

