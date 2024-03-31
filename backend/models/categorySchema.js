const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title:
  {
    type: String
  },

  image: {
    type: Stringe
  },

});

// create and export the mongoose model
module.exports = mongoose.model("Category", categorySchema);