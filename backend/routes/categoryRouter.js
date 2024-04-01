const express = require("express")

const cateogryRouter = express.Router()

const {createCateogry,getAllCategory} = require('../controllers/categoryFun')


cateogryRouter.post('/',createCateogry)
cateogryRouter.get("/allcategory",getAllCategory)

module.exports = cateogryRouter















