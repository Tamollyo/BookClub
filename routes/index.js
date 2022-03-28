const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/genre', controllers.getGenre)

router.get('/genre/:gid', controllers.getGenreById)

router.get('/genre/:gid/books', controllers.getBooksByGenreId)

router.get('/book/:bid', controllers.getBookById)

router.post('/book', controllers.createBook)

router.post('/review', controllers.createReview)

module.exports = router
