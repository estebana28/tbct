import mongoose, { Schema } from 'mongoose'

const questionSchema = new Schema(
  {
    topic: {
      type: Schema.Types.ObjectId,
      ref: 'Topic',
      required: [true, 'Topic is required'],
    },
    idTag: {
      type: Schema.Types.String,
      required: [true, 'Tag is required'],
    },
    question: {
      type: Schema.Types.String,
      required: [true, 'Question is required'],
    },
    levels: {
      type: Schema.Types.Number,
      required: [true, 'Levels is required'],
    },
    choices: [
      {
        description: Schema.Types.String,
        id: {
          type: Schema.Types.Number,
          required: [true, 'Id is required'],
        },
      },
    ],
    answer: {
      type: Schema.Types.Number,
      required: [true, 'Answer is required'],
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
    collection: 'questions',
  },
)

export default mongoose.models.Question ||
  mongoose.model('Question', questionSchema)
