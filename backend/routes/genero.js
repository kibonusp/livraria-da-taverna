const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genero')

router.post('/genero', genderController.createGender)

module.exports = router;