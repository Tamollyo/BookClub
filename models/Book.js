const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    read: { type: String, required: true },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre', required: true }
  },
  { timestamps: true }
)

module.exports = Book
