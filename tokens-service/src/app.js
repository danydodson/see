// require('dotenv').config()

const express = require('express')
const cors = require('cors')
const err = require('./utils')
const cookieSession = require('cookie-session')
const conf = require('./config')
const routes = require('./routes')
const app = express()

const startMongoose = require('./config/db')
startMongoose(conf.env)

app.enable('trust proxy')
app.use(cors())

app.use(express.json())

app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test',
}))

app.use(routes)
app.use(err.handler)

app.listen(conf.port, () => {
  console.info(`[users api]✔️(${conf.env})⭐http://${conf.host}:${conf.port}/${conf.prefix}`)
}
