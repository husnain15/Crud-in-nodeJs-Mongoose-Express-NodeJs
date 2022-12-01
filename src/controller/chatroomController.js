const chatroom=require("../models/chatRoom");


const addMsg=async(req,res)=>{
    try {
        const data=chatroom(req.body);
        
        data.save();
        res.send(req.body)
        
    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}

const getData=async(req,res)=>{
    try {
        
        const useEntity=await chatroom.find();
        res.status(200).send(useEntity);
        
    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}

const deleteData=async(req,res)=>{
    try {

        const id=req.params.id;
    const deletechat= await chatroom.findByIdAndDelete(id);
    res.status(200).send(deletechat)
        
    } catch (error) {
        
    }
}

const updateChat=async(req,res)=>{
    try {

        const {body}=req;

        //add data in database

        const dataAdd= await chatroom.findByIdAndUpdate(body._id,body,{new:true});
        res.status(200).send(dataAdd)
        
    } catch (error) {
        
    }
}

module.exports={addMsg,getData,deleteData,updateChat};