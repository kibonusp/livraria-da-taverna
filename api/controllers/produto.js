const productModel = require('../models/produto');
const genderModel = require('../models/genero');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const userModel = require('../models/user')

// * OK
module.exports.createProduct = async (req, res) => {
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});

    const newProduct = new productModel({
        "name": req.body.name,
        "author": req.body.author,
        "description": req.body.description,
        "genders": req.body.genders,
        "cover": req.body.cover,
        "price": req.body.price,
        "available": req.body.available,
        "sold": req.body.sold
    });

    try {
        const productSaved = await newProduct.save();
        return res.status(200).send(productSaved);
    }
    catch(e) {
        console.log("entrei aqui")
        return res.status(409).send("Product with this name already exists");
    }
}

// TODO: tem que testar
module.exports.uploadImage = async (req, res) => {
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});

    const myFile = req.files.image;

    console.log(myFile);
    console.log(req.params.id);

    const product = await productModel.findById(req.params.id);
    console.log(product)
    const previousImage = product !== undefined ? product.cover : undefined;

    productModel.findByIdAndUpdate(req.params.id, {cover: myFile.name}, (err, results) => {
        if (results !== undefined) {
            myFile.mv(`./assets/produtos/${myFile.name}`, function (err) {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ msg: "Error occured" });
                }
            });
            if (previousImage !== undefined && previousImage !== myFile.name)
                fs.unlink(path.join(__dirname, '../assets/produtos', previousImage), err => {if (err) throw err});
            res.status(200).send("Image updated");
        }
        else
            res.status(505).send("Error in setImage");
    });
}

// TODO: tem que testar
module.exports.getImage = async(req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (product) 
            res.status(200).sendFile(path.join(__dirname, '../assets/produtos', product.cover));
        else res.status(404).json("Image not found");
    }
    catch(e) {
        console.log(e);
    }
}

// * OK
module.exports.getProducts = async (req, res) => {
    const products = await productModel.find({});
    return res.status(200).send(products);
}

// * OK
module.exports.getProduct = async (req, res) => {
    const product = await productModel.findById(req.params.id);
    if (product === null)
        return res.status(404).send("Product not Found");
    return res.status(200).send(product);
}

// * OK
module.exports.getProductsFilter = async (req, res) => {
    const products = await productModel.find({})
    let productsF = products
    
    if(req.query.available === "true"){
        productsF = productsF.filter(el=>
            el.available > 0
            )
    }
    if(Number(req.query.lowPrice) !== 0){
        productsF = productsF.filter(el=>
            Number(el.price.substring(3)) >= Number(req.query.lowPrice)
            )
    }
    if(Number(req.query.highPrice) !== 0){
        productsF = productsF.filter(el=>
            Number(el.price.substring(3)) <= Number(req.query.highPrice)
            )
    }
    if (req.body.hasOwnProperty('price'))
        query.price = req.body.price;
    
    try {
        productModel.find(query, (err, products) => {
            if (products)
                return res.status(200).send(products);
            return res.status(500).send("Unknown error ocurred");
        });
    }
    catch (e) {
        console.log(e);
    }
}

// * OK
module.exports.updateProduct = async (req, res) => {
    console.log("Atualizando o produto")
    let genders = [];
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});

    for (let gender of req.body.genders) {
        genderModel.findOne({"name": gender}, (err, gdr) => {
            if (gdr) 
                genders.push(gdr._id);
        });
    }

    productModel.findByIdAndUpdate(req.params.id, {
        "name": req.body.name,
        "author": req.body.author,
        "description": req.body.description,
        "genders": genders,
        "cover": req.body.cover,
        "price": req.body.price,
        "available": req.body.available,
        "sold": req.body.sold
    }, (err, product) => {
        if (product)
            return res.status(200).send("Product was updated");
        if(err.codeName === "DuplicateKey") return res.status(404).send("Product name already used");
        return res.status(404).send("Product not found");
    })
}

// * OK
module.exports.deleteProduct = async (req, res) => {
    const sub = req.sub;
    const curUser = await userModel.findById(sub);
    if (curUser.admin === false)
        return res.status(401).send({error: 'No access to this user'});
        
    productModel.findByIdAndRemove(req.params.id, (err, product) => {
        if (product)
            return res.status(200).send("Product deleted");
        return res.status(404).send("Product not Found");
    })
}

module.exports.buyProduct = async (req, res) => {
    const product = await productModel.findById(req.params.id);

    productModel.findByIdAndUpdate(req.params.id, {
        "available": product.available - req.body.quantity, 
        "sold": product.sold + req.body.quantity
    }, (err, product) => {
        if (product)
            res.status(200).send("Product was updated")
        else
            res.status(404).send("Product not found");
    })
}