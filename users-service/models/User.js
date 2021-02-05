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

const postLikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Post',
  },
})

const commentLikeSchema = new mongoose.Schema({
  comment: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Comment',
  },
})

const commentReplyLikeSchema = new mongoose.Schema({
  comment: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Repl',
  },
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String
  },
  salt: {
    type: String
  },
  hash: {
    type: String
  },
  password: {
    type: String
  },
  profilePicture: {
    type: String,
    default: imgurl[Math.floor(Math.random() * 11)]
  },
  bio: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  activityStatus: {
    type: String,
    default: 'offline',
  },
  activated: {
    type: Boolean,
    default: process.env.ENABLE_SEND_EMAIL === 'true' ? false : true,
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedOn: {
    type: Date,
    default: Date.now
  },
  postLikes: [postLikeSchema],
  commentLikes: [commentLikeSchema],
  commentReplyLikes: [commentReplyLikeSchema],
}, {
  timestamps: true
})

UserSchema.index({ username: 'text', firstName: 'text', lastName: 'text' })

module.exports = mongoose.model('User', UserSchema)
