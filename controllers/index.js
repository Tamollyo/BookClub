const { json } = require('express/lib/response')
const { Genre, Book } = require('../models/index')

const getGenre = async (req, res) => {
  try {
    const genre = await Genre.find()
    console.log(genre)
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

const getBook = async (req, res) => {
  console.log('banana')
  try {
    const book = await Book.find()
    console.log(book)
    return res.status(201).send(book)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bid)
    return res.status(201).send(book)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body)
    await book.save()
    return res.status(201).json({ book })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBook = async (req, res) => {
  console.log(req.params)
  try {
    const { bid } = req.params
    console.log(bid)
    const book = await Book.findByIdAndUpdate(bid, req.body, { new: true })
    res.send({ book })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const { bid } = req.params
    const deleted = await Book.findByIdAndDelete(bid)
    if (deleted) {
      return res.status(200).send('Book deleted')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBooksByGenreId = async (req, res) => {
  try {
    let books = await Book.find({ genre: req.params.gid }).exec()
    return res.status(201).json(books)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {}

module.exports = {
  getGenre,
  updateBook,
  getGenreById,
  getBooksByGenreId,
  getBook,
  getBookById,
  deleteBook,
  createBook,
  createReview
}
