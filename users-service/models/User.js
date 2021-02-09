const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostLikeSchema = new Schema({
  post: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Post',
  },
})

const CommentLikeSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Comment',
  },
})

const CommentReplyLikeSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Repl',
  },
})

const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false : true
    }
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  username: {
    type: String,
    required: true,
    default: '',
  },
  hash: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true,
    default: 'email'
  },
  facebookId: {
    type: String,
    unique: true
  },
  googleId: {
    type: String,
    unique: true
  },
  avatar: {
    type: String,
    default: 'https://ik.imagekit.io/vdyy86fmjx/floresh/placeholder_JpZqtK2OR.png'
  },
  bio: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'role_member',
    enum: ['role_member', 'role_admin', 'role_merchant']
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date,
    default: () => new Date(+new Date() + 60000 * 60)
  },
  activityStatus: {
    type: String,
    default: 'offline'
  },
  activated: {
    type: Boolean,
    default: process.env.ENABLE_SEND_EMAIL === 'true' ? false : true
  },
  postLikes: [PostLikeSchema],
  commentLikes: [CommentLikeSchema],
  commentReplyLikes: [CommentReplyLikeSchema],
}, {
  timestamps: true
})

UserSchema.index({ username: 'text' })

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
    delete ret.hash
  }
})

module.exports = mongoose.model('User', UserSchema)