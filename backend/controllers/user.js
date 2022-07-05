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
    });
    try {
        const userSaved = await newUser.save();
        return res.status(200).send(userSaved);
    }
    catch(e){
        console.log(e);
        return res.status(409).send("User with this e-mail already exists");   
    }
}

// TODO: tem que testar
module.exports.uploadImage = async (req, res) => {
    const myFile = req.files.image;

    const user = await userModel.findById(req.params.id);
    const previousImage = user.photo;

    userModel.findByIdAndUpdate(req.params.id, {cover: myFile.name}, (err, results) => {
        console.log(results);
        if (results !== undefined) {
            myFile.mv(`./assets/users/${myFile.name}`, function (err) {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ msg: "Error occured" });
                }
            });
            if (previousImage !== null && previousImage !== "")
                fs.unlink(path.join(__dirname, '../assets/users', previousImage), err => {if (err) throw err});
            res.status(200).send("Image updated");
        }
        else
            res.status(505).send("Error in setImage");
    });
}

// TODO: tem que testar
module.exports.getImage = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (user) 
            res.status(200).sendFile(path.join(__dirname, '../assets/users', e));
        else res.status(404).json("Image not found");
    }
    catch(e) {
        console.log(e);
    }
}

module.exports.getUser = async (req, res) => {
    const curUser = await userModel.findById(req.params.id);
    if (curUser !== null) return res.status(200).send(curUser);
    else return res.status(400).send("User with this id does not exist");
}

module.exports.updateUser = async (req, res) => {    
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
            return res.status(200).send("User was updated");
        if(err.codeName === "DuplicateKey") return res.status(404).send("Email already used");
        return res.status(404).send("User not found");
    });   
}

module.exports.getUsers = async (req, res) => {
    const users = await userModel.find({});
    return res.status(200).send(users);
}

module.exports.deleteUser = async (req, res) => {
    userModel.findByIdAndRemove(req.params.id, (err, user) => {
        if (user)
            return res.status(200).send("User deleted");
        return res.status(404).send("User not Found");
    })
}