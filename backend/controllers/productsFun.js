const ProductModel = require('../models/productSchema')

const creatProduct = (req, res) => {
    console.log(req.body);
    const { nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category } = req.body

    const newProduct = new ProductModel({
        nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category
    })
    console.log(newProduct);
    newProduct.save()
    .then((result)=>{
        console.log(result);
        res.status(200)
        res.json("A New Product has Been Added")
    }).catch((error)=>{
        res.status(401)
        res.json({error:error})
    })
}

module.exports = {creatProduct}