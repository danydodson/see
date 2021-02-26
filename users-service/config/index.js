const dotenv = require('dotenv').config()

if (!dotenv) {
  throw new Error("⚠️ No .env file")
}

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development'

const conf = {
  host: process.env.API_HOST,
  port: parseInt(process.env.API_PORT),
  prefix: process.env.API_PREFIX,
  atlasURI: process.env.ATLAS_URI,
  jwtAlgorithm: process.env.JWT_ALGORITHM,
  jwtSecret: process.env.JWT_SECRET,
  env: env,
}

module.exports = conf
