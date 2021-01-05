const mongoose = require('mongoose')

const imgurl = [
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/bull.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/chick.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/crab.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/fox.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/hedgehog.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/hippopotamus.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/koala.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/lemur.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/pig.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/tiger.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/whale.png",
  "https://petsy-cdm-seeds.s3-us-west-1.amazonaws.com/png/zebra.png"
]

const UserSchema = mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String, default: 'na'
  },
  avatar: {
    type: String, default: imgurl[Math.floor(Math.random() * 11)]
  },
  role: {
    type: String, default: 'user', enum: ['user', 'admin']
  },
  confirmed: {
    type: Boolean, default: false
  },
}, { timestamps: true })

const User = (module.exports = mongoose.model('User', UserSchema))
