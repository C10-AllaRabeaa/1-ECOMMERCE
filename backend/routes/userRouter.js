const express = require("express")

const userRouter = express.Router()

const {creatUser} = require("../controllers/userFun")


userRouter.get('/',creatUser)

module.exports = userRouter