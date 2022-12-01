const express = require("express");
const router = new express.Router();
const { getAllTask,addTask,taskFindById,taskDeleteById,taskUpdate } = require("../controller/taskController");


router.get("/task", getAllTask);

router.post("/task/add",addTask );

router.get("/task/:id",taskFindById );

router.delete("/task/:id",taskDeleteById);

router.put("/task",taskUpdate );



module.exports= router;