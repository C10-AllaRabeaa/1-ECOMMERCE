const mongoose = require("mongoose");

const bcryptjs = require("bcryptjs");

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
    country: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    favoratie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ("Product")
    }],

    role :{
      type : mongoose.Schema.Types.ObjectId,
      ref : ("Role")  
    }
})

usersSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcryptjs.hash(this.password, 10);
    console.log(`email : ${this.email},password : ${this.password}`);
})

module.exports = mongoose.model("User", usersSchema);