import mongoose, { Schema } from 'mongoose'

const profileSchema = new Schema({
  authId: {
    type: Schema.Types.ObjectId,
    required: [true, 'authId is required'],
    ref: 'Auth',
  },
  name: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
    required: [true, 'Email is required'],
  },
  preferences: {
    topics: [Object],
  },
  createdAt: {
    type: Schema.Types.Date,
  },
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
  },
})

export default mongoose.models.Profile ||
  mongoose.model('Profile', profileSchema)
