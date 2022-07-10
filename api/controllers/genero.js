const genderModel = require('../models/genero')

// * OK
module.exports.createGender = async (req, res) => {
    const gender = new genderModel(req.body);
    try {
        const genderSaved = await gender.save();
        return res.status(200).send(genderSaved);
    }
    catch (e) {
        console.log(e);
        return res.status(409).send("Gênero já existente com esse nome");
    }
}

// * OK
module.exports.getGender = async (req, res) => {
    const gender = await genderModel.findById(req.params.id);
    if (gender === null)
        return res.status(404).send("Gender not Found");
    return res.status(200).send(gender);
}

module.exports.getGenderByName = async (req, res) => {
    const gender = await genderModel.findOne({name: req.params.nome}, (err, gender) => {
        if (!gender)
            return res.status(404).send("Gender not Found");
        
        return res.status(200).send(gender);
    });
}

// * OK
module.exports.getGenders = async (req, res) => {
    const genders = await genderModel.find({});
    return res.status(200).send(genders);
}

// * OK
module.exports.updateGender = async (req, res) => {
    genderModel.findByIdAndUpdate(req.params.id, req.body, (err, gender) => {
        if (gender)
            return res.status(200).send("Gender was updated");
        if(err.codeName === "DuplicateKey") return res.status(404).send("Gender name already used");
        return res.status(404).send("Gender not found");
    })
}

// * OK
module.exports.deleteGender = async (req, res) => {
    genderModel.findByIdAndRemove(req.params.id, (err, gender) => {
        if (gender)
            return res.status(200).send("Gender deleted");
        return res.status(404).send("Gender not Found");
    })
}