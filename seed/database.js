const db = require('../db')
const { Book } = require('../models')
const { Genre } = require('../models')
console.log(Genre)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genreFiction = new Genre({
    type: 'Fiction',
    description: 'ficton Genre',
    image: 'wow'
  })
  await genreFiction.save()

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

  const genreScienceFic = new Genre({
    type: 'ScienceFic',
    description: 'ScienceFic Genre',
    image: 'ScienceFic Image'
  })
  await genreScienceFic.save()

  const genreAdventure = new Genre({
    type: 'Adventure',
    description: 'Adventure Genre',
    image: 'Adventure Image'
  })
  await genreAdventure.save()

  const genreMystery = new Genre({
    type: 'Mystery',
    description: 'Mystery Genre',
    image: 'Mystery Image'
  })
  await genreMystery.save()

  const genreHorror = new Genre({
    type: 'Horror',
    description: 'Horror Genre',
    image: 'Horror Image'
  })
  await genreHorror.save()

  const genreNonFic = new Genre({
    type: 'NonFic ',
    description: 'NonFic  Genre',
    image: 'NonFic  Image'
  })
  await genreNonFic.save()

  const genrePoetry = new Genre({
    type: 'Poetry ',
    description: 'Poetry  Genre',
    image: 'Poetry Image'
  })
  await genrePoetry.save()

  const genreChildren = new Genre({
    type: 'Children',
    description: 'Children Genre',
    image: 'Children Image'
  })
  await genreChildren.save()

  const books = [
    {
      name: 'Treasure',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreFiction._id
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
      description: 'Adventure book',
      image: 'wow',
      genre: genreAdventure._id
    },
    {
      name: 'Treasure4',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreFiction._id
    },
    {
      name: 'Treasure5',
      author: 'molly',
      description: 'Mystery book',
      image: 'wow',
      genre: genreMystery._id
    },
    {
      name: 'Treasure6',
      author: 'molly',
      description: 'horror book',
      image: 'wow',
      genre: genreHorror._id
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
