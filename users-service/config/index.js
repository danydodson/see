
module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
  api_url: `${process.env.API_URL}`,
  jwt_secret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}
