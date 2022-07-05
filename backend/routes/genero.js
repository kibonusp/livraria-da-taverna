const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genero');

router.post('/genero', genderController.createGender);
router.get('/genero', genderController.getGenders);
router.get('/genero/:id', genderController.getGender)
router.put('/genero/:id', genderController.updateGender);
router.delete('/genero/:id', genderController.deleteGender);    

module.exports = router;