const express = require('express');
const mongoose=require("mongoose");
const cors=require("cors");

require("dotenv").config(); // configuration is in "dotenv" file

const app=express();      //create express server and port is 5000
const port =process.env.PORT || 5000;

app.use(cors()); //middleware
app.use(express.json());  // enable json parsing


const uri =process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
});