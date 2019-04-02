const router = require('express').Router()
const booksController = require('../controllers/booksController')

router.get('/', booksController.findAll)
router.get('/:id', booksController.findOne)
router.post('/', booksController.create)
router.put('/:id', booksController.updatePut)
router.patch('/:id', booksController.updatePatch)
router.delete('/:id', booksController.delete)

module.exports = router