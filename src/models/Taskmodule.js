const express =require("express");
const mongoose =require("mongoose");
const MensRanking=require("../models/mens");
const section = require("./sectoion");



const taskSchema=new mongoose.Schema({
    name:{
        type:String,

    },
    description:{
type:String
    },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:MensRanking
  }, 
  section:{
    type:mongoose.Schema.Types.ObjectId,
    ref:section
  }, 
  
    
})

const task=new mongoose.mongoose.model("task",taskSchema)
module.exports=task;