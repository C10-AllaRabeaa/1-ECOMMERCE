const authorization = (text)=>{
    return (req,res,next)=>{
        console.log('req.token>>:',req.token.permissions)

        if(req.token.permissions.includes (text)){
            next()
        }else{
            res.status(403).json({ message: "unauthorized" });
        }
    }
}

module.exports = authorization