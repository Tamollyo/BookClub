const db = require('../db')
const { Book } = require('../models')
const { Genre } = require('../models')
console.log(Genre)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genreFicton = new Genre({
    type: 'Fiction',
    description: 'ficton Genre',
    image: 'wow'
  })
  await genreFicton.save()

  const genreRomance = new Genre({
    type: 'Romance',
    description: 'Romance Genre',
    image: 'BowChicawow'
  })
  await genreRomance.save()

  const genreDystopian = new Genre({
    type: 'Dystopian',
    description: 'Dystopian Genre',
    image: 'BowChicawow'
  })
  await genreDystopian.save()

  const books = [
    {
      name: 'Treasure',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreFicton._id
    },
    {
      name: 'Treasure2',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreDystopian._id
    },
    {
      name: 'Treasure3',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreRomance._id
    }
  ]
  await Book.insertMany(books)
}

const run = async () => {
  await db.dropDatabase()
  await main()
  db.close()
}

run()
