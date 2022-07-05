const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUser);
router.post('/user/:id', userController.updateUser);
router.get('/user', userController.getUsers);
router.put('/user/:id/image', userController.uploadImage);
router.get('/user/:id/image', userController.getImage);
router.get('/user/search/:name', userController.getUsers);
router.delete('/user/:id', userController.deleteUser);


module.exports = router;