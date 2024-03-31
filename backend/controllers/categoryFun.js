const categoryModel = require("../models/categorySchema") 



const createCateogry = (req,res) =>{
    console.log("req.body :>> ", req.body);
    const {title , image}= req.body
    const newCategory = new categoryModel ({
        title , image
    })
    console.log('newUser>>:', newCategory)
    newCategory.save()
    .then((result)=>{
        console.log(result);
        res.status(200)
        res.json("Category Added")
    }).catch((error)=>{
        res.status(401)
        res.json({error : error})
    })
} 


module.exports = {createCateogry}