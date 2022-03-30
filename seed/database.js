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
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await genreAction.save()

  const genreAdventure = new Genre({
    type: 'Adventure',
    description:
      'An adventure story is about a protagonist who journeys to epic or distant places to accomplish something. It can have many other genre elements included within it, because it is a very open genre.',
    image: 'https://i.imgur.com/XmxAQaS.png'
  })
  await genreAdventure.save()

  const genreComedy = new Genre({
    type: 'Comedy',
    description:
      'Comedy is a story that tells about a series of funny, or comical events, intended to make the audience laugh. It is a very open genre, and thus crosses over with many other genres on a frequent basis.',
    image: 'https://i.imgur.com/UnknqhY.png'
  })
  await genreComedy.save()

  const genreCrime = new Genre({
    type: 'Crime & Mystery',
    description:
      'A crime story is often about a crime that is being committed or was committed, but can also be an account of a criminals life. A mystery story follows an investigator as they attempt to solve a puzzle (often a crime). ',
    image: 'https://i.imgur.com/3czx3Nk.png'
  })
  await genreCrime.save()

  const genreFantasy = new Genre({
    type: 'Fantasy',
    description:
      'A fantasy story is about magic or supernatural forces, as opposed to technology as seen in science fiction.',
    image: 'https://i.imgur.com/BSCmFjW.png'
  })
  await genreFantasy.save()

  const genreHistorical = new Genre({
    type: 'Historical',
    description: 'A story about a real person or event. ',
    image: 'https://i.imgur.com/D6qmlNR.png'
  })
  await genreHistorical.save()

  const genreHistFic = new Genre({
    type: 'Historical Fiction',
    description:
      'The historical fiction genre includes stories that are about the past. It takes place in the real world, with real world people, but with several fictionalized or dramatized elements.',
    image: 'https://i.imgur.com/boeSgIm.png'
  })
  await genreHistFic.save()

  const genreHorror = new Genre({
    type: 'Horror',
    description: 'Horror',
    image: 'https://i.imgur.com/M684U5M.png'
  })
  await genreHorror.save()

  const genreRomance = new Genre({
    type: 'Romance',
    description:
      'A romance is understood to be "love stories", emotion-driven stories that are primarily focused on the relationship between the main characters of the story. Beyond the focus on the relationship, the biggest defining characteristic of the romance genre is that a happy ending is always guaranteed',
    image: 'https://i.imgur.com/p3rpWvc.png'
  })
  await genreRomance.save()

  const genreSatire = new Genre({
    type: 'Satire',
    description:
      'In satire, human or individual vices, follies, abuses, or shortcomings are held up to censure by means of ridicule, derision, burlesque, irony, or other methods, ideally with the intent to bring about improvement.',
    image: 'https://i.imgur.com/HVHuJnA.png'
  })
  await genreSatire.save()

  const genreScienceFiction = new Genre({
    type: 'Science Fiction',
    description:
      'Science fiction (once known as scientific romance) is similar to fantasy, except stories in this genre use scientific understanding to explain the universe that it takes place in.',
    image: 'https://i.imgur.com/zozgEB0.png'
  })
  await genreScienceFiction.save()

  const genreCyber = new Genre({
    type: 'Cyberpunk',
    description:
      'Cyberpunk is a speculative subgenre of scifi that involves stories with a futuristic storyline dealing with people who have been physically or mentally enhanced with cybernetic components, often featuring cyborgs or the singularity as a major theme, and generally somewhat cynical or dystopian (hence the "punk" portion of the name).',
    image: 'https://i.imgur.com/1t6e4oQ.png'
  })
  await genreCyber.save()

  const genreDystopian = new Genre({
    type: 'Dystopian',
    description:
      'About worlds that are unlike the real world in various important ways.',
    image: 'https://i.imgur.com/h5zIN1Y.png'
  })
  await genreDystopian.save()

  const genreThriller = new Genre({
    type: 'Thriller',
    description:
      'A thriller is a story that is usually a mix of fear and excitement.',
    image: 'https://i.imgur.com/0plyGud.png'
  })
  await genreThriller.save()

  const genreWestern = new Genre({
    type: 'Western',
    description:
      'Stories in the Western genre are set in the American West, between the time of the Civil war and the early 20th century.',
    image: 'https://i.imgur.com/7RkV8B5.png'
  })
  await genreWestern.save()

  const genreOther = new Genre({
    type: 'Other',
    description: 'Anything Else',
    image: 'https://i.imgur.com/jrxEKhf.png'
  })
  await genreOther.save()

  const books = [
    {
      name: 'Wool',
      author: 'Hugh Howey',
      description:
        "Thousands of them have lived underground. They've lived there so long, there are only legends about people living anywhere else. Such a life requires rules. Strict rules. There are things that must not be discussed. Like going outside.",
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
      genre: genreDystopian._id
    },
    {
      name: 'The Silent Patient',
      author: 'Alex Michaelides',
      description:
        "The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband―and of the therapist obsessed with uncovering her motive. Alicia Berenson's life is seemingly perfect.",
      image:
        'https://bookpipeline.com/wp-content/uploads/sites/4/2020/02/The-Silent-Patient.jpg',
      genre: genreThriller._id
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
      name: 'Go Tell the Bees That I Am Gone',
      author: 'Diana Gabaldon',
      description:
        'The past may seem the safest place to be . . . but it is the most dangerous time to be alive. . . .',
      image:
        'http://www.dianagabaldon.com/wordpress/wp-content/uploads/2021/04/2021-04-15-BEES-PRH-US-cover-220x334.png',
      genre: genreHistFic._id
    },
    {
      name: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      description:
        'Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder.',
      image:
        'https://www.picclickimg.com/d/l400/pict/144441267771_/Where-the-Crawdads-Sing.jpg',
      genre: genreOther._id
    },
    {
      name: 'The Eye of the World',
      author: 'Robert Jordan',
      description:
        'The Eye of the World is actually a pool of untainted saidin, created over three thousand years ago. Two of the Forsaken—ancient wielders of the One Power, sworn to the Shadow and imprisoned since the Breaking of the World—appear and try to claim the Eye.',
      image:
        'https://i.pinimg.com/originals/cf/d7/00/cfd70068c1b79909250b174f89544e98.jpg',
      genre: genreFantasy._id
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
