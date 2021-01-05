const express = require('express')
const router = express.Router()
const { getUsers, addUser } = require('../controllers')

router
  .route('/:id?')
  .get(getUsers)

router
  .route('/')
  .post(addUser)

module.exports = router