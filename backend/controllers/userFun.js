const userModel = require('../models/userSchema')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const creatUser = (req,res)=>{
    console.log(req.body);
    

    const {firstName,lastName,age,country,email,password} = req.body

    const newUser = new userModel ({
        firstName,lastName,age,country,email,password
    })
    console.log(newUser);
    newUser.save()
    .then((result)=>{
        console.log(result);
        res.status(200)
        res.json("Successfully registered a new user")
    }).catch((error)=>{
        res.status(401)
        res.json({error:error})
    })

}

const getAllUsers =(req,res)=>{
    userModel.find()
    .then((result) => {
        console.log(result);
        res.status(200)
        res.json({
          success: true,
          message: "All the Users",
          User: result
        })
      })
      .catch((error) => {
        res.status(500)
        res.json({
          success: false,
          message: "Server Error",
          error: error
        })
      })
}

const login = (req,res)=>{
    console.log(req.body);
    
    const {email,password} = req.body
 
    userModel.findOne({email})
    .then(async(result)=>{
        if(!result){
            res.status(404)
            res.json('email not registered')
        }try{
            const isValid = await bcryptjs.compare(password,result.password);

        if(!isValid){
            res.status(404)
            res.json('password not match')  
        }else{
            const payload = {
                id :result._id,
                role : result.role,
                
            }
            const options = {
                expiresIn : "1h"
            }
            const userToken = jwt.sign(payload, process.env.SECRET, options)
            
            res.json({ message: "welcome to the website and You are logged in", token: userToken });
        }
        }
        catch(error){
            throw new Error(error.message)
        }
    }).catch((error)=>{
        console.log(error);
        res.status(401)
        res.json({error:error})
    })
}

module.exports = {creatUser,getAllUsers,login}



        