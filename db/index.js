const mongoose = require('mongoose')
require('dotenv').config()
// Mongoose to establish a connection to our MongoDB
// let MONGODB_URI = 'mongodb://127.0.0.1:27017/booksDatabase'
let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/booksDatabase'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((e) => {
    console.error('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
