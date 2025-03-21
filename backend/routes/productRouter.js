const express = require("express")

const productRouter = express.Router()

const authentication = require('../middleware/authentication')

const {creatProduct,getAllProduct,getProductByCategory,getProductById,updateProductById,deleteProductById} = require('../controllers/productsFun')


productRouter.post('/',creatProduct)

productRouter.get('/allproduct',authentication,getAllProduct)

productRouter.get("/category/:id",getProductByCategory)

productRouter.get('/item/:id',getProductById)

productRouter.put('updateproduct/:id',authentication,updateProductById)

productRouter.delete("/deleteProduct/:id",authentication,deleteProductById)

module.exports = productRouter


 //hedar.token ما تنسى authentication


//authentication,authorization ("text")
//chek user in login authentication
//user or admin  authorization (permation)





