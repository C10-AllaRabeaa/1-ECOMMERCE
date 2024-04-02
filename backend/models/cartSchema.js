const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    // id product (Ref => product Schema)
    // id user (Ref => user Schema)

    //    category: {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref: "category"
    // },
});


module.exports = mongoose.model("Cart",cartSchema)