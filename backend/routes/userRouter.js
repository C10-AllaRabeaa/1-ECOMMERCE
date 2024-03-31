const express = require("express")

const userRouter = express.Router()

const {creatUser,getAllUsers,login} = require("../controllers/userFun")


userRouter.post('/register',creatUser);
userRouter.get('/allusers',getAllUsers);
userRouter.post("/login",login)

module.exports = userRouter