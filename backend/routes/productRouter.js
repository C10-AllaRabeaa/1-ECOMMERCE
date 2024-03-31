const express = require("express")

const productRouter = express.Router()

const {creatProduct} = require('../controllers/productsFun')


productRouter.get('/',creatProduct)

module.exports = productRouter











