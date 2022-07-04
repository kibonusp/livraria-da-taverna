const productModel = require('../models/produto')
const genderModel = require('../models/genero')

module.exports.createProduct = async (req, res) => {
    let genders = []
    for (let gender of req.body.genders) {
        let genderFound = genderModel.findOne({"name": gender})
        if (genderFound !== undefined)
            genders.push(genderFound._id)
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
    }
    catch(e) {
        print(e)
    }

    return res.status(200).send(productSaved)
}