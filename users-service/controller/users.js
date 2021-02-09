const express = require('express')
const router = express.Router()
const userService = require('../services')

exports.register = async (req, res, next) => {
  await userService.create(req.body)
    .then((user) => res.json(user))
    .catch(err => next(err))
}

exports.signin = async (req, res, next) => {
  await userService.signin(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

exports.getAll = async (req, res, next) => {
  await userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err))
}

exports.getCurrent = async (req, res, next) => {
  await userService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err))
}

exports.getById = async (req, res, next) => {
  await userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err))
}

exports.update = async (req, res, next) => {
  await userService.update(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch(err => next(err))
}

exports.destroy = async (req, res, next) => {
  await userService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err))
}
