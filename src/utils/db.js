const mongoose = require('mongoose')

const connect = async () => {
  if (mongoose.connections[0].readyState) return

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB_NAME,
    })
    console.log(`MongoDB connected successfully`)
  } catch (err) {
    throw new Error('Error conection to MongoDB', err)
  }
}

export default connect
