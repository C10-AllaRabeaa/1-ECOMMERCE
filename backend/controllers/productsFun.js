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

const getProductByCategory = (req,res)=>{
const categoryId = req.query.category

ProductModel.find({category : categoryId})

.then((category) => {
    console.log("result with categoryId >>", category);
    if (category.length > 0) {
      res.status(200)
      res.json({
        success: true,
        message: "All the category for the category: ${categoryId}",
        category: category
      })
    } else {
      res.status(404)
      res.json({
        success: false,
        message: "The category => ${categoryId} has no category"
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

module.exports = {creatProduct,getProductByCategory}