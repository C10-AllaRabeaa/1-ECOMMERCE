const express = require("express")

const productRouter = express.Router()

const {creatProduct,getProductByCategory} = require('../controllers/productsFun')


productRouter.get('/',creatProduct)
productRouter.get("/product/search_1",getProductByCategory)

module.exports = productRouter











