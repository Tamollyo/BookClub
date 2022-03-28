const mongoose = require('mongoose')
const BookSchema = require('./Book')
const GenreSchema = require('./Genre')
const ReviewSchema = require('./Review')

const Book = mongoose.model('books', BookSchema)
const Genre = mongoose.model('genres', GenreSchema)
const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Book,
  Genre,
  Review
}
