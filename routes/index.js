const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/genre', controllers.getGenre)

router.get('/genre/:gid', controllers.getGenreById)

// router.get('/genre/:gid/book', controllers.getBooksByGenreId)

router.get('/book', controllers.getBook)

router.get('/book/:bid', controllers.getBookById)

// router.put('/book/:bid', controllers.updateBook)

router.delete('/book/:bid', controllers.deleteBook)

router.post('/book', controllers.createBook)

router.post('/review', controllers.createReview)

module.exports = router
