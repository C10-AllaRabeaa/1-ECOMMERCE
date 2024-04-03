const express = require("express")

const cateogryRouter = express.Router()

const authentication = require('../middleware/authentication')


const authorization = require('../middleware/authorization')


const {createCateogry,getAllCategory,} = require('../controllers/categoryFun')


cateogryRouter.post('/',authentication,authorization,createCateogry)
cateogryRouter.get("/allcategory",authentication,getAllCategory)

module.exports = cateogryRouter















