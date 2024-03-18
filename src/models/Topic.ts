import mongoose, { Schema } from 'mongoose'

const TopicSchema = new Schema(
  {
    label: {
      type: Schema.Types.String,
      required: [true, 'Name is required'],
    },
    value: {
      type: Schema.Types.String,
      required: [true, 'Value is required'],
    },
    description: {
      type: Schema.Types.String,
      required: [true, 'Description is required'],
    },
    color: {
      type: Schema.Types.String,
      required: [true, 'Color is required'],
    },
    icon: {
      type: Schema.Types.String,
      required: [true, 'Icon is required'],
    },
    questionsQty: {
      type: Schema.Types.Number,
      default: 0,
    },
    status: {
      type: Schema.Types.Boolean,
      default: true,
    },
    createdAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    updatedAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
  },
  {
    collection: 'topics',
  },
)

export default mongoose.models.Topic || mongoose.model('Topic', TopicSchema)
