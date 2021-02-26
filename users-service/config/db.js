const mongoose = require('mongoose')
const conf = require('.')

const options = {
  autoIndex: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

const startDatabase = () => {

  mongoose.connect(conf.atlasURI, options)
    .then((res) => {
      console.info(`[users api]✔️(${conf.env})⭐${res.connection.host}⭐(${res.connection.name})`)
    })

  mongoose.Promise = global.Promise

  mongoose.connection.on('error', err => {
    console.error(`[users api]❌(${conf.env})🔥db🔥${err.message}`)
    process.exit(-1)
  })

  conf.env === 'development'
    ? mongoose.set('debug', true)
    : mongoose.set('debug', false)

}

module.exports = startDatabase
