const { Genre, Book } = require('../models/index')

const getGenre = async (req, res) => {
  try {
    const genre = await Genre.find()
    return res.status(201).send(genre)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.gid)
    return res.status(201).send(genre)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBooksByGenreId = async (req, res) => {}

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bid)
    return res.status(201).send(book)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createBook = async (req, res) => {}

const createReview = async (req, res) => {}

module.exports = {
  getGenre,
  getGenreById,
  getBooksByGenreId,
  getBookById,
  createBook,
  createReview
}
