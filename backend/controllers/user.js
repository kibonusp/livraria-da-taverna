const userModel = require('../models/user')

module.exports.createUser = async (req, res) => {

    const newUser = new productModel({
        "name": req.body.name,
        "email": req.body.email,
        "telephone": req.body.telephone,
        "address": req.body.adress,
        "password": req.body.password,
        "photo": req.body.photo,
        "admin": req.body.admin
    })
    try {
        const userSaved = await newProduct.save()
    }
    catch(e){
        print(e)
    }

    return res.status(200).send(userSaved)
}

module.exports.getUser = async (req, res) => {
    let curUser = userModel.findById(req.id)
    if (curUser !== undefined) return res.status(200).send(curUser)
}