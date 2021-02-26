const request = require('supertest')
const mongoose = require('mongoose')
const MongoMemoryServer = require('mongodb-memory-server')
const app = require('../app')

beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf'
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

  let mongo = new MongoMemoryServer()
  const mongoUri = await mongo.getUri()
  
  await mongoose.connect(mongoUri, {
    autoIndex: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()

  for (let collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await mongo.stop()
  await mongoose.connection.close()
})

global.signin = async () => {
  const email = 'test@test.com'
  const password = 'password'

  const response = await request(app)
    .post('/auth/signup')
    .send({ email, password })
    .expect(201)

  const cookie = response.get('Set-Cookie')

  return cookie
}
