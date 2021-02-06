const mongoose = require('mongoose')

const mongoConnection = (env) => {

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => {
    console.info(`[users api]✔️(${env})⭐${res.connection.host}⭐(${res.connection.name})`)
  })

  mongoose.Promise = global.Promise

  mongoose.connection.on('error', (err) => {
    console.error(`[users api]❌(${env})🔥db🔥${err.message}`)
    process.exit(-1)
  })

  env === 'development'
    ? mongoose.set('debug', true)
    : mongoose.set('debug', false)

  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('autoIndex', false)

}

module.exports = mongoConnection

