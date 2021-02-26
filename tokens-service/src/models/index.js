const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // email: { type: String, required: () => { return this.provider !== 'email' ? false : true } },
  // hash: { type: String, required: true },
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
  credentials: [AuthSchema],
  postLikes: [PostLikeSchema],
  commentLikes: [CommentLikeSchema],
  commentReplyLikes: [CommentReplyLikeSchema],
},
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.hash
        delete ret.__v
      }
    }
  },
  {
    timestamps: true
  }
)

const AuthSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
})

const PostLikeSchema = new Schema({
  post: {
    type: Schema.ObjectId,
    ref: 'Post',
  },
})

const CommentLikeSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    ref: 'Comment',
  },
})

const CommentReplyLikeSchema = new Schema({
  comment: {
    type: Schema.ObjectId,
    ref: 'Reply',
  },
})

UserSchema.index({ username: 'text' })

UserSchema.static.build = (attrs) => new User(attrs)

const User = mongoose.model('User', UserSchema)

module.exports = User
