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
      read: 'unread',
      genre: genreDystopian._id
    },
    {
      name: 'The Silent Patient',
      author: 'Alex Michaelides',
      description:
        "The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband―and of the therapist obsessed with uncovering her motive. Alicia Berenson's life is seemingly perfect.",
      image:
        'https://bookpipeline.com/wp-content/uploads/sites/4/2020/02/The-Silent-Patient.jpg',
      read: 'unread',
      genre: genreThriller._id
    },
    {
      name: 'Into the Wild',
      author: 'Jon Krakauer',
      description:
        'Adventure bookn April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself.',
      image:
        'https://media.movieassets.com/static/images/items/movies/posters/1ef7c09d50c89d8150e7e8fc91f21d2d.jpg',
      read: 'unread',
      genre: genreAdventure._id
    },
    {
      name: 'Go Tell the Bees That I Am Gone',
      author: 'Diana Gabaldon',
      description:
        'The past may seem the safest place to be . . . but it is the most dangerous time to be alive. . . .',
      image:
        'http://www.dianagabaldon.com/wordpress/wp-content/uploads/2021/04/2021-04-15-BEES-PRH-US-cover-220x334.png',
      read: 'unread',
      genre: genreHistFic._id
    },
    {
      name: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      description:
        'Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder.',
      image:
        'https://www.picclickimg.com/d/l400/pict/144441267771_/Where-the-Crawdads-Sing.jpg',
      read: 'unread',
      genre: genreOther._id
    },
    {
      name: 'The Eye of the World',
      author: 'Robert Jordan',
      description:
        'The Eye of the World is actually a pool of untainted saidin, created over three thousand years ago. Two of the Forsaken—ancient wielders of the One Power, sworn to the Shadow and imprisoned since the Breaking of the World—appear and try to claim the Eye.',
      image:
        'https://i.pinimg.com/originals/cf/d7/00/cfd70068c1b79909250b174f89544e98.jpg',
      read: 'unread',
      genre: genreFantasy._id
    },
    {
      name: 'The Book Theif',
      author: 'Markus Zusak',
      description:
        'It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.',
      image:
        'https://media.npr.org/assets/artslife/books/2010/11/three-books-erskine/book-thief_custom-5556fa04c9c8b2854fecdce5f096940a892255db-s6-c10.jpg',
      read: 'unread',
      genre: genreHistFic._id
    },
    {
      name: 'The Giving Tree',
      author: 'Markus Zusak',
      description:
        'So begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein.',
      image:
        'https://3boysandadog.com/wp-content/uploads/2015/02/giving-tree.jpg',
      read: 'unread',
      genre: genreFantasy._id
    },
    {
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      description:
        'This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.',
      image:
        'https://www.daimanuel.com/wp-content/uploads/2016/05/the-alchemist-book-cover.jpg',
      read: 'unread',
      genre: genreFantasy._id
    },
    {
      name: 'Life of Pi',
      author: 'Yann Martel',
      description:
        'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. ',
      image: 'https://posterspy.com/wp-content/uploads/2015/02/life-of-pi.jpg',
      read: 'unread',
      genre: genreAdventure._id
    },
    {
      name: 'Nervous People and Other Satires',
      author: 'Mikhail Zoshchenko',
      description: `Typical targets of Zoshchenko's satire are the Soviet bureaucracy, crowded conditions in communal apartments, marital infidelities and the rapid turnover in marriage partners, and "the petty-bourgeois mode of life, with its adulterous episodes, lying, and similar nonsense."`,
      image:
        'https://i.pinimg.com/originals/66/76/d3/6676d306765624428caeda64500e4a37.jpg',
      read: 'unread',
      genre: genreSatire._id
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      description: `The Hitch Hiker's Guide "A towel is about the most massively useful thing an interstellar hitchhiker can have" and a galaxy-full of fellow travellers: Zaphod Beeblebrox - the two-headed, three-armed ex-hippie and totally out to lunch president of the galaxy`,
      image:
        'https://www.greatschools.org/gk/wp-content/uploads/2016/03/The-Hitchhikers-Guide-to-the-Galaxy.jpg',
      read: 'unread',
      genre: genreComedy._id
    },
    {
      name: 'Billy Summers',
      author: 'Stephen King',
      description: `Billy Summers is a man in a room with a gun. He’s a killer for hire and the best in the business. But he’ll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit.`,
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F01%2F27%2FBilly-Summers-2000.jpg',
      read: 'unread',
      genre: genreCrime._id
    },
    {
      name: 'The Final Girl Support Group',
      author: 'Grady Hendrix',
      description: `The one who fought back, defeated the killer, and avenged her friends. The one who emerges bloodied but victorious. But after the sirens fade and the audience moves on, what happens to her?`,
      image:
        'https://www.rollingstone.com/wp-content/uploads/2021/07/FinalGirlSupportGroup-.jpg',
      read: 'unread',
      genre: genreHorror._id
    },
    {
      name: 'People We Meet on Vacation',
      author: 'Emily Henry',
      description: `Poppy and Alex have been best friends since forever, and each year they take a vacation together—a glorious, uncomplicated summer holiday. Except that last year it got complicated, and this year it’s weirdsies for all.`,
      image:
        'https://img1.od-cdn.com/ImageType-100/1191-1/%7B71CB6AF0-3092-4033-9ECA-A053995D364C%7DImg100.jpg',
      read: 'unread',
      genre: genreRomance._id
    },
    {
      name: 'The Hobbit, or There and Back Again',
      author: 'J.R.R. Tolkien',
      description: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat:`,
      image:
        'https://i5.walmartimages.com/asr/0ea6502b-4cb2-4176-bfbf-63d0cb845909_1.77f6a15dcfb606189b287b4e156ec141.jpeg',
      read: 'unread',
      genre: genreAdventure._id
    },
    {
      name: 'Crying in H Mart',
      author: 'Michelle Zauner',
      description: `An unflinching, powerful memoir about growing up Korean American, losing her mother, and forging her own identity.`,
      image:
        'https://louderthanwar.com/wp-content/uploads/2021/08/Crying-in-H-Mart-by-Michelle-Zauner-955x1536.jpg',
      read: 'unread',
      genre: genreOther._id
    },
    {
      name: 'Project Hail Mary',
      author: 'Andy Weir',
      description: `A lone astronaut.
      An impossible mission.
      An ally he never imagined.`,
      image:
        'https://bookandfilmglobe.com/wp-content/uploads/2021/05/91Bd7P8UwxL.jpg',
      read: 'unread',
      genre: genreScienceFiction._id
    },
    {
      name: 'Extreme North',
      author: 'Bernd Brunner',
      description: `Scholars and laymen alike have long projected their fantasies onto the great expanse of the global North, whether it be as a frozen no-man’s-land, an icy realm of marauding Vikings, or an unspoiled cradle of prehistoric human life.`,
      image:
        'https://prodimage.images-bn.com/pimages/9780393881004_p0_v1_s1200x630.jpg',
      read: 'unread',
      genre: genreHistorical._id
    },
    {
      name: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      description: `From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside.`,
      image:
        'https://s.yimg.com/uu/api/res/1.2/ldgb1IT8SRRqLFDXztiwrQ--~B/aD0yMDAwO3c9MTMxNjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/entertainment_weekly_785/0a4ba7bd376402475bdc79f60a5217a8',
      read: 'unread',
      genre: genreDystopian._id
    },
    {
      name: 'Dune: Book 1',
      author: 'Frank Herbert',
      description: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. `,
      image:
        'https://i1.wp.com/www.tor.com/wp-content/uploads/2019/07/Dune-cover-1.jpg?type=vertical&ssl=1',
      read: 'unread',
      genre: genreScienceFiction._id
    },
    {
      name: 'Cyberpunk: Outlaws and Hackers on the Computer Frontier',
      author: 'Katie Hafner, John Markoff',
      description: `Using the exploits of three international hackers, Cyberpunk provides a fascinating tour of a bizarre subculture populated by outlaws who penetrate even the most sensitive computer networks and wreak havoc on the information they find -- everything from bank accounts to military secrets.`,
      image:
        'https://images-eu.ssl-images-amazon.com/images/I/61BczibNcjL._SY346_.jpg',
      read: 'unread',
      genre: genreCyber._id
    },
    {
      name: 'The Old Man and the Sea',
      author: 'Ernest Hemingway',
      description: `This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses—`,
      image: 'https://papermine.com/pub/5682408/media/5686515.jpg',
      read: 'unread',
      genre: genreCyber._id
    },
    {
      name: 'The Stand',
      author: 'Stephen King',
      description: `When a man escapes from a biological testing facility, he sets in motion a deadly domino effect, spreading a mutated strain of the flu that will wipe out 99 percent of humanity within a few weeks.`,
      image:
        'https://antonysimpson.com/wp-content/uploads/2016/05/stephen-king-the-stand-book-cover.jpg',
      read: 'unread',
      genre: genreThriller._id
    },
    {
      name: 'News of the World',
      author: 'Paulette Jiles',
      description: `In the wake of the Civil War, Captain Jefferson Kyle Kidd travels through northern Texas, giving live readings from newspapers to paying audiences hungry for news of the world.`,
      image:
        'https://superstarsbio.com/wp-content/uploads/2020/05/News-Of-The-World-poster.jpg',
      read: 'unread',
      genre: genreThriller._id
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
