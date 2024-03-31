const roleModel = require("../models/roleSchema") 



const createRole = (req,res) =>{
    console.log("req.body :>> ", req.body);
    const {role , permissions}= req.body
    const newRoler = new roleModel ({
        role , permissions
    })
    console.log('newUser>>:', newRoler)
    newRoler.save()
    .then((result)=>{
        console.log(result);
        res.status(200)
        res.json("The Specific Role of this User")
    }).catch((error)=>{
        res.status(401)
        res.json({error : error})
    })
} 

module.exports = {createRole}