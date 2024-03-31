const userModel = require('../models/userSchema')

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

module.exports = {creatUser}