const express = require("express")

const productRouter = express.Router()

const {creatProduct,getAllProduct,getProductByCategory,getProductById,updateProductById,deleteProductById} = require('../controllers/productsFun')


productRouter.post('/',creatProduct)

productRouter.get('/allproduct',getAllProduct)

productRouter.get("/product/search_1",getProductByCategory)

productRouter.get('/search_2/:id',getProductById)

productRouter.put('updateproduct/:id',updateProductById)

productRouter.delete("/deleteProduct/:id",deleteProductById)

module.exports = productRouter











