const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/user', userController.createUser)
router.get('/user/:id', userController.getUser)
router.post('/user/:id', userController.editUser)
router.get('/user', userController.getUsers)
router.get('/user/search/:name', userController.getUsers)


module.exports = router