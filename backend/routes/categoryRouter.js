const express = require("express")

const cateogryRouter = express.Router()

const {createCateogry} = require('../controllers/categoryFun')


cateogryRouter.get('/',createCateogry)

module.exports = cateogryRouter















