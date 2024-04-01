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

const getAllCategory = (req,res)=>{
    categoryModel.find()
    .then((result) => {
        console.log(result);
        res.status(200)
        res.json({
          success: true,
          message: "All the Category",
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


module.exports = {createCateogry,getAllCategory}