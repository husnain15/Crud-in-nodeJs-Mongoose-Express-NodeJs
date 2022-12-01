const express=require("express");
const mongoose=require('mongoose');


const messageSchema=new mongoose.Schema({
    description:{
        type:String,
    },
    
})

const Message=new mongoose.mongoose.model("message",messageSchema);

module.exports=Message;