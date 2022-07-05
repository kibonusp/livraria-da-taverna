const userModel = require('../models/user')

module.exports.createUser = async (req, res) => {

    const newUser = new userModel({
        "name": req.body.name,
        "email": req.body.email,
        "telephone": req.body.telephone,
        "address": req.body.address,
        "password": req.body.password,
        "photo": req.body.photo,
        "admin": req.body.admin
    })
    try {
        const userSaved = await newUser.save()
        return res.status(200).send(userSaved)
    }
    catch(e){
        console.log(e)
        return res.status(409).send("User with this e-mail already exists")   
    }
}

module.exports.getUser = async (req, res) => {
    const curUser = await userModel.findById(req.params.id)
    if (curUser !== null) return res.status(200).send(curUser)
    else return res.status(400).send("User with this id does not exist")   
}

module.exports.editUser = async (req, res) => {    
    userModel.findByIdAndUpdate(req.params.id, {
        "name": req.body.name,
        "email": req.body.email,
        "telephone": req.body.telephone,
        "address": req.body.address,
        "password": req.body.password,
        "photo": req.body.photo,
        "admin": req.body.admin
    }, (err, user) => {
        if (user)
            return res.status(200).send("user was updated")
        if(err.codeName === "DuplicateKey") return res.status(404).send("email already used")
        return res.status(404).send("user not found")
    });   
}

module.exports.getUsers = async (req, res) => {
    const users = await userModel.find({});
    return res.status(200).send(users);
}