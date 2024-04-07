const express = require("express")

const cateogryRouter = express.Router()

const authentication = require('../middleware/authentication')


const authorization = require('../middleware/authorization')


const {createCateogry,getAllCategory,} = require('../controllers/categoryFun')


cateogryRouter.post('/',createCateogry)
cateogryRouter.get("/allcategory",getAllCategory)

module.exports = cateogryRouter















