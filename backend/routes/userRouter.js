const express = require("express")

const userRouter = express.Router()

const authentication = require('../middleware/authentication')


const {creatUser,getAllUsers,login,updateUserById,delateUserById} = require("../controllers/userFun")


userRouter.post('/register',creatUser);
userRouter.get('/allusers',getAllUsers);
userRouter.post("/login",login)

userRouter.put("/add/favoratie/:id",updateUserById)

userRouter.delete("/delate/favoratie/:id",delateUserById)



module.exports = userRouter