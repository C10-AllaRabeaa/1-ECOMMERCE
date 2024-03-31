const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nameProduct: {
        type: String,
        required: true,
    },
    imageProduct: {
        type: String,
    },
    priceProduct: {
        type: Number,
    },
    descriptionProduct:
    {
        type: String,
    },
    colorsProduct: [{
        type: String,
    }],
    sizeProduct: [{
        type: Number,
        
    }],
    nameBrand: {
        type: String,
    },
    producingCountry: {
        type: String,
    },
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "category"
    },

})

module.exports = mongoose.model("Product", productSchema);