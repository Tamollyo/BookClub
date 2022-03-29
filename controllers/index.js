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
    const bookId = req.body.book
    const book = await Book.findById(bookId)
    await Book.findByIdAndUpdate(bookId, {
      details: [book.id]
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const updateBook = async (req, res) => {
//   try {
//     const { bid } = req.params
//     console.log(bid)
//     await Book.findByIdAndUpdate(bid, req.body, { new: true }, (err, book) => {
//       if (err) {
//         return res.status(500).send(err)
//       }
//       // if (!book) {
//       //   res.status(500).send('Book not found!')
//       // }
//       return res.status(200).json(book)
//     })
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

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

// const getBooksByGenreId = async (req, res) => {
//   try {
//     const genre = await Genre.findById(req.params.gid)
//     let books = []
//     for await (const bookId of genre.books) {
//       let bookList = await Book.findById(bookId)
//       console.log(bookList, 'WYAO SJSKLJDFD')
//       books.push(bookList)
//     }
//     return res.status(201).json(books)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const createReview = async (req, res) => {}

module.exports = {
  getGenre,
  getGenreById,
  // getBooksByGenreId,
  getBook,
  getBookById,
  // updateBook,
  deleteBook,
  createBook,
  createReview
}
