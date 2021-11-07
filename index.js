const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const port = process.env.PORT || 8000;

const connectDB = require("./databse/dbconnect.js");
connectDB();


app.use("/public", express.static("./public/"));
app.use("/api/single", require("./routes/files"));
app.use("/files/share", require("./routes/server"));
app.use("/files", require("./routes/download"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(process.cwd() + '/index/login.html');
})
console.log(__dirname);
app.listen(port, ()=>{
    console.log("listening to port");
})