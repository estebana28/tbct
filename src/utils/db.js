const mongoose = require('mongoose')

export const connectDB = async () => {
  if (mongoose.connection.readyState == 1) {
    console.log('Already connected')
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB connected successfully`)
  } catch (err) {
    throw new Error('Error conection to MongoDB', err)
  }
}
