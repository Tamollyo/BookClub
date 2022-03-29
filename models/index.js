const mongoose = require('mongoose')
const BookSchema = require('./Book')
const GenreSchema = require('./Genre')
// const ReviewSchema = require('./Review')

const Book = mongoose.model('Book', BookSchema)
const Genre = mongoose.model('Genre', GenreSchema)
// const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Book,
  Genre
  // Review
}
