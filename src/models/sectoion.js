const express=require("express");
const  mongoose  = require("mongoose");

const sectionSchema=new mongoose.Schema({
  
    title:{
        type:String,
        
    }
})

const Section=new mongoose.mongoose.model("section",sectionSchema);

module.exports=Section;