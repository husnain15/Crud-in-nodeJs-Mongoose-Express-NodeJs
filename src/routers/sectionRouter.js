const express = require("express");
const router = new express.Router();
const {getAllCategory,addsubCategory,taskDelete,categoryUpdate}=require("../controller/sectionController")

router.get("/section",getAllCategory);

router.post("/addsection",addsubCategory);

router.delete("/deletesection/:id",taskDelete);

router.put("/updatesection",categoryUpdate)

module.exports=router;