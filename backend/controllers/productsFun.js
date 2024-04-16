const ProductModel = require('../models/productSchema')

const creatProduct = (req, res) => {
    console.log(req.body);
    const { nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category } = req.body

    const newProduct = new ProductModel({
        nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category
    })
    console.log(newProduct);
    newProduct.save()
        .then((result) => {
            console.log(result);
            res.status(200)
            res.json("A New Product has Been Added")
        }).catch((error) => {
            res.status(401)
            res.json({ error: error })
        })
}

const getAllProduct = (req, res) => {
    ProductModel.find()
    //.populate("category")
        .then((result) => {
            console.log(result);
            res.status(200)
            res.json({
                success: true,
                message: "All the Product",
                User: result
            })
        })
        .catch((error) => {
            res.status(500)
            res.json({
                success: false,
                message: "Server Error",
                error: error
            })
        })
}


const getProductByCategory = (req, res) => {
    const productByCategory = req.params.id

    ProductModel.find({ category: productByCategory })
    
        .then((category) => {
            console.log("result with Product By Category >>", category);
            if (category.length > 0) {
                res.status(200)
                res.json({
                    success: true,
                    message: `All the Product for the category: ${productByCategory}`,
                    category: category
                })
            } else {
                res.status(404)
                res.json({
                    success: false,
                    message: `The category => ${productByCategory} has no category`
                })
            }
        })
        .catch((error) => {
            res.status(500)
            res.json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })

}

const getProductById = (req, res) => {
    const categoryById = req.params.id;
    console.log(categoryById);
    ProductModel.findById(categoryById)
        //question use result or arcicals
        .then((resulte) => {
            console.log(resulte);
            res.status(200)
            res.json({
                success: true,
                massage: `The Category ${categoryById}`,
                resulte: resulte
            })
        }).catch((error) => {
            res.status(500)
            res.json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}

const updateProductById = (req, res) => {
    console.log("Update Product :", req.body);
    const productIdUpdate = req.body;

    const { nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category } = req.body

    ProductModel.findByIdAndUpdate(productIdUpdate, { nameProduct, imageProduct, priceProduct, descriptionProduct, colorsProduct, sizeProduct, nameBrand, producingCountry, category }, { new: true })
        .then((resulte) => {
            res.status(201)
            res.json({
                success: true,
                message: "Product updated",
                resulte: resulte 
            })
                .catch((error) => {
                    res.status(204)
                    res.json({
                        success: false,
                        message: "Server Error",
                        err: error.message
                    })
                })
        })
}


const deleteProductById = (req, res) => {
    const delteIdProduct = req.params.id;
    ProductModel.findByIdAndDelete(delteIdProduct)
        .then((article) => {
            res.status(202)
            res.json({
                success: true,
                message: "Product Deleted ",
                article: article,
            })
        })
        .catch((error) => {
            res.status(204)
            res.json({
                success: false,
                message: "Server Error",
                err: error.message
            })
        })
}





module.exports = { creatProduct, getAllProduct, getProductByCategory, getProductById, updateProductById,deleteProductById }