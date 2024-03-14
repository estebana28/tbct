import mongoose, { Schema } from 'mongoose'

const historySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Id is required'],
    },
    answers: [
      {
        topicId: {
          type: Schema.Types.ObjectId,
          required: [true, 'Id is required'],
        },
        topicAnswers: [
          {
            questionId: {
              type: Schema.Types.ObjectId,
              required: [true, 'Id is required'],
            },
            answerId: {
              type: Schema.Types.ObjectId,
              required: [true, 'Id is required'],
            },
            updatedAt: {
              type: Schema.Types.Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
    correctAnswers: {
      type: Schema.Types.Number,
      default: 0,
    },
    wrongAnswers: {
      type: Schema.Types.Number,
      default: 0,
    },
    partiallyCorrectAnswers: {
      type: Schema.Types.Number,
      default: 0,
    },
    totalQuestionsAnswered: {
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
    collection: 'history',
    _id: false,
  },
)

export default mongoose.models.History ||
  mongoose.model('History', historySchema)
