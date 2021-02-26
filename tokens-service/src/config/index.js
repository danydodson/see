const dotenv = require('dotenv').config()

process.env.NODE_ENV = 'development'

if (!dotenv) {
  throw new Error("⚠️ couldn't find .env file")
}

const config = {
  db: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  algo: process.env.JWT_ALGO
  prefix: process.env.PREFIX,
  env: process.env.NODE_ENV,
  host: parseInt(process.env.HOST),
  port: parseInt(process.env.PORT)
}

module.exports = config