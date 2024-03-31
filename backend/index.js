const express = require("express");
const cors = require("cors");

const db = require("./models/db")

const app = express();

const userRouter =require("./routes/userRouter")
//const PORT = process.env.PORT || 5000;

const PORT = 5000;

app.use(cors());
app.use(express.json());

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));



app.use("/user",userRouter)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
