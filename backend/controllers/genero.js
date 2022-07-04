const genderModel = require('../models/genero')

module.exports.createGender = async (req, res) => {
    console.log('oi')
    const gender = new genderModel(req.body)
    try {
        const genderSaved = await gender.save()
        return res.status(200).send(genderSaved)
    }
    catch (e) {
        console.log(e)
        return res.status(409).send("Gênero já existente com esse nome")
    }
}   