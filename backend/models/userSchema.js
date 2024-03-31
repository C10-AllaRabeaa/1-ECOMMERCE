const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
    },
    age : {
        type: Number, 
    },
    country : {
        type: String, 
    },
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password : {
        type : mongoose.Schema.Types.Mixed,
        required: true,
    },
    favorait:[{
        type :mongoose.Schema.Types.ObjectId,
        required: true,
    }]
})

module.exports = mongoose.model("User",usersSchema);