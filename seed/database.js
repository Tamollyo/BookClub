const db = require('../db')
const { Book } = require('../models')
const { Genre } = require('../models')
console.log(Genre)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genreAction = new Genre({
    type: 'Action',
    description:
      'An action story is similar to adventure, and the protagonist usually takes a risky turn, which leads to desperate situations (including explosions, fight scenes, daring escapes, etc.).',
    image: 'https://imgur.com/ePIkwsB'
  })
  await genreAction.save()

  const genreAdventure = new Genre({
    type: 'Adventure',
    description:
      'An adventure story is about a protagonist who journeys to epic or distant places to accomplish something. It can have many other genre elements included within it, because it is a very open genre.',
    image: 'https://imgur.com/XmxAQaS'
  })
  await genreAdventure.save()

  const genreComedy = new Genre({
    type: 'Comedy',
    description:
      'Comedy is a story that tells about a series of funny, or comical events, intended to make the audience laugh. It is a very open genre, and thus crosses over with many other genres on a frequent basis.',
    image: 'https://imgur.com/UnknqhY'
  })
  await genreComedy.save()

  const genreCrime = new Genre({
    type: 'Crime & Mystery',
    description:
      'A crime story is often about a crime that is being committed or was committed, but can also be an account of a criminals life. A mystery story follows an investigator as they attempt to solve a puzzle (often a crime). ',
    image: 'https://imgur.com/3czx3Nk'
  })
  await genreCrime.save()

  const genreFantasy = new Genre({
    type: 'Fantasy',
    description:
      'A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction.',
    image: 'https://imgur.com/BSCmFjW'
  })
  await genreFantasy.save()

  const genreHistorical = new Genre({
    type: 'Historical',
    description: 'A story about a real person or event. ',
    image: 'https://imgur.com/D6qmlNR'
  })
  await genreHistorical.save()

  const genreHorror = new Genre({
    type: 'Horror',
    description: 'A story about a real person or event. ',
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
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.instructables.com%2FORIG%2FF3Y%2FJH65%2FIR9E8KTR%2FF3YJH65IR9E8KTR.jpg%3Fframe%3D1%26width%3D2100&f=1&nofb=1',
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
