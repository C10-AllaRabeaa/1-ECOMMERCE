const jwt = require("jsonwebtoken")


const authentication =async (req,res,next) =>{
    console.log(req.headers.authorization);
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ").pop();
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