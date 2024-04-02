const express = require("express")

const userRouter = express.Router()

const authentication = require('../middleware/authentication')

const authorization = require('../middleware/authorization')

const {creatUser,getAllUsers,login} = require("../controllers/userFun")


userRouter.post('/register',creatUser);
userRouter.get('/allusers',authentication,authorization("text"),getAllUsers);
userRouter.post("/login",authorization,login)

module.exports = userRouter