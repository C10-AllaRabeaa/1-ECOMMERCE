const express = require("express")

const userRouter = express.Router()

const authentication = require('../middleware/authentication')


const {creatUser,getAllUsers,login,updateUserById,delateUserById,getuserById} = require("../controllers/userFun")


userRouter.post('/register',creatUser);
userRouter.get('/allusers',getAllUsers);
userRouter.post("/login",login)

userRouter.put("/add/favoratie/:id",authentication,updateUserById)

userRouter.delete("/delate/favoratie/:id",authentication,delateUserById)

userRouter.get("/by/:id",getuserById)

module.exports = userRouter