const db = require('../db')
const Book = require('../models/Book')
const Genre = require('../models/Genre')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genres = [
    { type: 'fiction', description: 'fiction book', image: 'wow' },
    { type: 'fiction', description: 'fiction book', image: 'wow' }
  ]
  await Genre.insertMany(genres)
  console.log('Created a book!')

  const books = [
    {
      name: 'Treasure',
      author: 'molly',
      description: 'fiction book',
      image: 'wow'
    },
    {
      name: 'Treasure2',
      author: 'molly',
      description: 'fiction book',
      image: 'wow'
    },
    {
      name: 'Treasure3',
      author: 'molly',
      description: 'fiction book',
      image: 'wow'
    }
  ]
  await Book.insertMany(books)
}

const run = async () => {
  await main()
  db.close()
}

run()
