const mongoose = require('mongoose')

const { db_uri, env } = require('.')

mongoose.connection.on('error', err => {
  console.error(`[users api]🔥 db error ${err}`)
  process.exit(-1)
})

if (env === 'development') {
  mongoose.set('debug', true)
}

exports.connect = () => {
  mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    keepAlive: 1,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then((res) => {
    console.debug(`[users api]✔️ (${env}) ${res.connection.host}`)
  })
  return mongoose.connection
}