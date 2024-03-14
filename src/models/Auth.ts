import mongoose, { Schema } from 'mongoose'

const authSchema = new Schema(
  {
    email: {
      type: Schema.Types.String,
      unique: true,
      required: [true, 'Email is required'],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid'],
    },
    code: {
      type: Schema.Types.String,
      required: [true, 'Code is required'],
      minLength: [6, 'Code must be at least 6 characters'],
      maxLength: [6, 'Code must be at most 6 characters'],
    },
    createdAt: {
      type: Schema.Types.Date,
    },
    updatedAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
    role: {
      type: Schema.Types.String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { collection: 'auth' },
)

export default mongoose.models.Auth || mongoose.model('Auth', authSchema)
