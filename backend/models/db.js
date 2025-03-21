const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
// connecting to mongodb
mongoose.connect(process.env.DB_URI).then(
  () => {
    console.log("DB Ready To Use App");
  },
  (err) => {
    console.log(err);
  }
);
