import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  language: {
    type: String,
  },
  profile: {
    type: Object,
    default: {},
  },
})

export default mongoose.models.User || mongoose.model('User', userSchema)
