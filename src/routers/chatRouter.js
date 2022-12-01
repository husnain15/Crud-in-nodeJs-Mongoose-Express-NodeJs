const express=require("express")
const router=new express.Router();
    const {addMsg,getData,deleteData,updateChat}=require("../controller/chatroomController")

    router.post("/msgadd",addMsg);
    router.get("/getdata",getData);
    router.delete("/deletechat/:id",deleteData);
    router.put("/chatupdate",updateChat)

    module.exports=router;