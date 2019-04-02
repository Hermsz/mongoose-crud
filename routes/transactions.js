const router = require('express').Router()
const transactionsController = require('../controllers/transactionsController')

router.get('/', transactionsController.findAll)
router.get('/:id', transactionsController.findOne)
router.post('/', transactionsController.create)
router.put('/:id', transactionsController.updatePut)
router.delete('/:id', transactionsController.delete)

module.exports = router