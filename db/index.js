const mongoose = require('mongoose')

// Mongoose to establish a connection to our MongoDB
let MONGODB_URI = 'mongodb://127.0.0.1:27017/booksDatabase'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, usedNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((e) => {
    console.error('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
