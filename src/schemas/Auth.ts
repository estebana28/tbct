import { Schema, model } from 'mongoose'
import { IAuth } from '@/interfaces/auth'

const authSchema = new Schema<IAuth>(
  {
    email: {
      type: Schema.Types.String,
      unique: true,
      required: true,
    },
    code: {
      type: Schema.Types.String,
      required: true,
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
  },
  { collection: 'auth' },
)

export const AuthModel = model('Auth', authSchema)
