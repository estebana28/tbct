const mongoose = require('mongoose')

const connect = async () => {
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

export default connect
