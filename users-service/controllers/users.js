const User = require('../models')
const mongoose = require('mongoose')
const { hashPassword } = require('../utils')

exports.getUsers = async (req, res) => {
  try {

    let users

    if (!req.params.id) {
      users = await User.find()
    } else {
      users = await User.find({ _id: req.params.id })

    }
    return res.status(200).json({
      success: true, data: users
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false })
  }
}

exports.addUser = async (req, res) => {
  try {

    let email = req.body.email
    let username = req.body.username
    let password = await hashPassword(req.body.password)
    let id = new mongoose.Types.ObjectId()

    const user = await User.create({
      _id: id,
      email: email,
      username: username,
      password: password
    })

    return res.status(201).json({
      success: true,
      data: user
    })

  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)
      return res.status(400).json({
        success: false,
        error: messages
      })
    }

    return res.status(500).json({
      success: false,
      msg: err.name
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, msg: err.name })
  }
}