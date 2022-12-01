//import express

const express=require("express");
const  mongoose  = require("mongoose");
const message =require("./msgtouser");

//defined schema

const menSchema=new mongoose.Schema({

ranking:{
    type:Number,
    required:true,  
    unique:true,
},
name:{
    type:String,
    required:true,
    trim:true
},
dob:{
    type:Date,
    required:true,
    trim:true
},
country:{
    type:String,
    trim:true
},
score:{
    type:Number,
    required:true,
    trim:true
},
event:{
    type:String,
    default:"100m"
    },
    message:{
        type:mongoose.Schema.Types.ObjectId,
        ref:message
      }


})

//Create model of schema

const MensRanking=new mongoose.model("MenRanking",menSchema);

module.exports=MensRanking;