const mongoose = require("mongoose")

mongoose
  .connect("mongodb://127.0.0.1:27017/Project-4")
  .then(() => {
    console.log("DB Ready To Use App");
  })
  .catch((err) => {
    console.log(err);
  });