const express = require("express");
const router = new express.Router();
const {createTask,getAllTask,findById,deleteById,addTask} = require("../controller/userController");



const MensRanking = require("../models/mens");

router.get("/", getAllTask);

router.get("/find-id/:rankId",findById );

router.delete("/delete/:rankId",deleteById);

router.post("/users/add",addTask );

router.put("/update/", async (req, res) => {
  // const id=req.params;
  const { body } = req;

  const updateUser = await MensRanking.findByIdAndUpdate(body._id, body);
  
  res.send({ message: "Tutorial was updated successfully" });
});

//we will handle requests

router.post("/mens", createTask);

module.exports = router;
