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

  const genreHistFic = new Genre({
    type: 'Historical Fiction',
    description:
      'The historical fiction genre includes stories that are about the past. It takes place in the real world, with real world people, but with several fictionalized or dramatized elements.',
    image: 'https://imgur.com/boeSgIm'
  })
  await genreHistFic.save()

  const genreHorror = new Genre({
    type: 'Horror',
    description: 'Horror',
    image: 'https://imgur.com/M684U5M'
  })
  await genreHorror.save()

  const genreRomance = new Genre({
    type: 'Romance',
    description:
      'A romance is understood to be "love stories", emotion-driven stories that are primarily focused on the relationship between the main characters of the story. Beyond the focus on the relationship, the biggest defining characteristic of the romance genre is that a happy ending is always guaranteed',
    image: 'https://imgur.com/p3rpWvc'
  })
  await genreRomance.save()

  const genreSatire = new Genre({
    type: 'Satire',
    description:
      'In satire, human or individual vices, follies, abuses, or shortcomings are held up to censure by means of ridicule, derision, burlesque, irony, or other methods, ideally with the intent to bring about improvement.',
    image: 'https://imgur.com/HVHuJnA'
  })
  await genreSatire.save()

  const genreScienceFiction = new Genre({
    type: 'Science Fiction',
    description:
      'Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in.',
    image: 'https://imgur.com/zozgEB0'
  })
  await genreScienceFiction.save()

  const genreCyber = new Genre({
    type: 'Cyberpunk',
    description:
      'Cyberpunk is a speculative subgenre of scifi that involves stories with a futuristic storyline dealing with people who have been physically or mentally enhanced with cybernetic components, often featuring cyborgs or the singularity as a major theme, and generally somewhat cynical or dystopian (hence the "punk" portion of the name).',
    image: 'https://imgur.com/1t6e4oQ'
  })
  await genreCyber.save()

  const genreDystopian = new Genre({
    type: 'Dystopian',
    description:
      'About worlds that are unlike the real world in various important ways.',
    image: 'https://imgur.com/h5zIN1Y'
  })
  await genreDystopian.save()

  const genreThriller = new Genre({
    type: 'Thriller',
    description:
      'A thriller is a story that is usually a mix of fear and excitement.',
    image: 'https://imgur.com/0plyGud'
  })
  await genreThriller.save()

  const genreWestern = new Genre({
    type: 'Western',
    description:
      'Stories in the Western genre are set in the American West, between the time of the Civil war and the early 20th century.',
    image: 'https://imgur.com/7RkV8B5'
  })
  await genreWestern.save()

  const genreOther = new Genre({
    type: 'Other',
    description: 'Anything Else',
    image: 'https://imgur.com/jrxEKhf'
  })
  await genreOther.save()

  const books = [
    {
      name: 'Treasure',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreOther._id
    },
    {
      name: 'Treasure2',
      author: 'molly',
      description: 'fiction book',
      image: 'wow',
      genre: genreWestern._id
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
      genre: genreAdventure._id
    },
    {
      name: 'Treasure5',
      author: 'molly',
      description: 'Mystery book',
      image: 'wow',
      genre: genreAdventure._id
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
