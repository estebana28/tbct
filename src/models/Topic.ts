import mongoose, { Schema } from 'mongoose'

const TopicSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, 'Name is required'],
    },
    description: {
      type: Schema.Types.String,
      required: [true, 'Description is required'],
    },
    idTag: {
      type: Schema.Types.String,
      required: [true, 'Tag is required'],
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
    questionsQty: {
      type: Schema.Types.Number,
      default: 0,
    },
  },
  {
    collection: 'topics',
  },
)

export default mongoose.models.Topic || mongoose.model('Topic', TopicSchema)
