const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// anyone -- done
router.post('/user', userController.createUser);

// user only -- done
router.get('/user/:id', userController.validateToken, userController.getUser);

// user only, except admin -- done
router.put('/user/:id', userController.validateToken, userController.updateUser);

// admin only -- done
router.put('/admin/users/:userID', userController.validateToken, userController.changeAdmin);

// admin only, but just email, photo and admin -- done
router.get('/user', userController.validateToken, userController.getUsers);

// anyone -- done
router.put('/user/:id/image', userController.uploadImage);

// user and admin -- done
router.get('/user/:id/image', userController.getImage);

// user and admin -- done
router.delete('/user/:id', userController.validateToken, userController.deleteUser);

// anyone -- done
router.post('/user/auth', userController.authenticateUser);

module.exports = router;