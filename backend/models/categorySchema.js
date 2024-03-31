const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title:
  {
    type: String,
    required: true,

  },

  image: {
    type: String,
    required: true,
  },

});

// create and export the mongoose model
module.exports = mongoose.model("Category", categorySchema);