const router = require('express').Router()
const membersController = require('../controllers/membersController')

router.get('/', membersController.findAll)
router.get('/:id', membersController.findOne)
router.post('/', membersController.create)
router.put('/:id', membersController.updatePut)
router.delete('/:id', membersController.delete)

module.exports = router