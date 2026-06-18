require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB=require("./config/db")
const app = express();
connectDB()
app.use(express.json())
app.use(
    "/api/auth",require("./routes/authRoutes")
);

app.use("/api", require("./routes/harryRoutes"))
app.get("/", (req, res) => {
  res.send("Server is working");
});
app.listen(3002, () => {
  console.log("server started");
});