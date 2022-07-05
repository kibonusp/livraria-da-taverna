const productModel = require('../models/produto')
const genderModel = require('../models/genero')

module.exports.createProduct = async (req, res) => {
    let genders = []
    for (let gender of req.body.genders) {
        genderModel.findOne({"name": gender}, (err, gdr) => {
            if (gdr)
                genders.push(gdr._id)
        });
    }

    const newProduct = new productModel({
        "name": req.body.name,
        "author": req.body.author,
        "description": req.body.description,
        "genders": genders,
        "cover": req.body.cover,
        "price": req.body.price,
        "available": req.body.available,
        "sold": req.body.sold
    })

    try {
        const productSaved = await newProduct.save()
        return res.status(200).send(productSaved)
    }
    catch(e) {
        console.log(e)
        return res.status(409).send("Product with this name already exists")
    }
}

module.exports.getProducts = async (req, res) => {
    const products = await productModel.find({})
    return res.status(200).send(products)
}

module.exports.getProduct = async (req, res) => {
    const product = productModel.findById(req.params.id)
    if (product === null)
        return res.status(404).send("Product not Found")
    return res.status(200).send(product)
}

module.exports.getProductsFilter = async (req, res) => {
    const products = productModel.find(
        {genders: {"$in": [req.body.gender]}},
        {available: req.body.available > 0},
        {price: { $gt: req.body.lowPrice, $lt: req.body.highPrice}}
        )
    if (products === null)
        return res.status(404).send("Products not Found")
    return res.status(200).send(products)
}

module.exports.updateProduct = async (req, res) => {
    let genders = []
    for (let gender of req.body.genders) {
        genderModel.findOne({"name": gender}, (err, gdr) => {
            if (gdr) 
                genders.push(gdr._id)
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
            return res.status(200).send("Product was updated")
        if(err.codeName === "DuplicateKey") return res.status(404).send("Product name already used")
        return res.status(404).send("Product not found")
    })
}

module.exports.deleteProduct = async (req, res) => {
    productModel.findByIdAndRemove(req.params.id, (err, product) => {
        if (product)
            return res.status(200).send("Product deleted")
        return res.status(404).send("Product not Found")
    })
}