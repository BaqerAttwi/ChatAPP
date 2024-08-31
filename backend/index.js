const express =require("express");
const cors=require("cors");//require to communicate with the front end
const mangoose = require("mongoose");
const app=express();
require("dotenv").config()
app.use(express.json());//To use use json data
app.use(cors());//as line 2 
const port =process.env.port || 5000;
const uri=process.env.AtLAS_URI;
app.listen(port,(req , res)=>{
console.log(`Server running on port = ${port}`);}
);
mangoose.connect(uri)
  .then(() => {
    console.log("Mongodb connection established");
  })
  .catch((error) => {
    console.log("Connection failed:", error.message);
  });