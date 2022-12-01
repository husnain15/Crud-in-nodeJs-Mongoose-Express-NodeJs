const express =require("express");
const mongoose =require("mongoose");

const chatRoomSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    message:[{
        type:String,
}]
})

const chatRoom=new mongoose.model("chatRoom",chatRoomSchema);
module.exports=chatRoom;