import mongoose, { Schema } from 'mongoose'

const levelSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, 'Name is required'],
    },
    color: {
      type: Schema.Types.String,
      required: [true, 'Color is required'],
    },
    number: {
      type: Schema.Types.Number,
      required: [true, 'Number is required'],
    },
    createdAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    updatedAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    status: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  {
    collection: 'levels',
  },
)

export default mongoose.models.Level || mongoose.model('Level', levelSchema)
