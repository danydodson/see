const mongoose = require('mongoose')
const conf = require('../config')

const opts = {
  autoIndex: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
}

const startMongo = (env) => {

  mongoose.connect(conf.db, opts)
    .then(res => {
      console.info(`[users api]✔️(${env})⭐${res.connection.host}⭐(${res.connection.name})`)
    })

  mongoose.Promise = global.Promise

  mongoose.connection.on('error', err => {
    console.error(`[users api]❌(${env})🔥db🔥${err.message}`)
    process.exit(-1)
  })

  mongoose.set('debug', env === 'development' ? true : false)

}

module.exports = startMongo