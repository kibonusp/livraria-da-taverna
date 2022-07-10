const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
    const newUser = new userModel({
        "name": req.body.name,
        "email": req.body.email,
        "telephone": req.body.telephone,
        "address": req.body.address,
        "password": await bcrypt.hash(req.body.password, 10),
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
    const sub = req.sub;

    if (req.params.id != sub)
        return res.status(401).send({error: 'No access to this user'});

    const myFile = req.files.image;

    const user = await userModel.findById(req.params.id);
    const previousImage = user.photo;

    userModel.findByIdAndUpdate(req.params.id, {cover: myFile.name}, (err, results) => {
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
    const sub = req.sub;

    const curUser = await userModel.findById(sub);

    if (sub !== req.params.id && curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});

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
    const sub = req.sub;

    if (req.params.id != sub)
        return res.status(401).send({error: 'No access to this user'});

    const curUser = await userModel.findById(req.params.id);

    if (curUser !== null) 
        return res.status(200).send(curUser);
    else 
        return res.status(400).send("User with this id does not exist");
}

module.exports.updateUser = async (req, res) => {
    const sub = req.sub;

    if (req.params.id != sub)
        return res.status(401).send({error: 'No access to this user'});

    userModel.findByIdAndUpdate(req.params.id, {
        "name": req.body.name,
        "email": req.body.email,
        "telephone": req.body.telephone,
        "address": req.body.address,
        "password": req.body.password,
        "photo": req.body.photo,
        "admin": false
    }, (err, user) => {
        if (user)
            return res.status(200).send("User was updated");
        if(err.codeName === "DuplicateKey") return res.status(404).send("Email already used");
        return res.status(404).send("User not found");
    });   
}

module.exports.changeAdmin = async (req, res) => {
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});
    
    userModel.findByIdAndUpdate(req.params.userID, {
        "admin": req.body.admin
    }, (err, user) => {
        if (user)
            return res.status(200).send("User was updated");
        return res.status(404).send("User not found");
    })
}

module.exports.getUsers = async (req, res) => {
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this route'});
    const users = await userModel.find({});

    return res.status(200).send(users.map(({_id, email, photo, admin}) => ({"id": _id, "email": email, "photo": photo, "admin": admin})));
}

module.exports.deleteUser = async (req, res) => {
    const sub = req.sub;

    const curUser = await userModel.findById(sub);

    if (sub !== req.params.id && curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});

    userModel.findByIdAndRemove(req.params.id, (err, user) => {
        if (user)
            return res.status(200).send("User deleted");
        return res.status(404).send("User not Found");
    })
}

module.exports.validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token)
        return res.sendStatus(401);
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);

        req.sub = user.id;
        next();
    });
};

module.exports.authenticateUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email: email});

    if (!user)
        return res.status(404).send({error: 'User not Found'});
    
    if (await bcrypt.compare(password, user.password))
        return res.status(200).json(generateAccessToken(user));
    else
        res.status(401).send(false)
}

const generateAccessToken = user => {
    return jwt.sign({id: user._id, email: user.email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"})
}