const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, autoIndex: false }

const mongoConnection = env => {
  mongoose.connect(process.env.MONGO_URI, options)
    .then((res) => {
      console.info(`[users api]✔️(${env})⭐${res.connection.host}⭐(${res.connection.name})`)
    })

  mongoose.Promise = global.Promise

  mongoose.connection.on('error', err => {
    console.error(`[users api]❌(${env})🔥db🔥${err.message}`)
    process.exit(-1)
  })

  env === 'development'
    ? mongoose.set('debug', true)
    : mongoose.set('debug', false)

}

module.exports = mongoConnection
