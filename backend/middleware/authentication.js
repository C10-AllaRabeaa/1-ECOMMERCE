const jwt = require("jsonwebtoken")


const authentication =async (req,res,next) =>{
    console.log(req.header.authentication);
    if(req.header.authentication){
        const token = req.header.authentication.split(" ").pop();
        try {
            const verify = await jwt.verify(token,process.env.SECRET)
            console.log("verify",verify);
            req.token = verify
            next()
        }catch(error){
            res.send("token is invalid")
        }
    }else{
        res.status(401)
        res.json("you must login")
    }
}

module.exports = authentication