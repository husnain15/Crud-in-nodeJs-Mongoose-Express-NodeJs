const task =require("../models/Taskmodule");

const getAllTask=async (req, res) => {
    const list = await task.find();
  
    res.status(200).send(list);
  }

  const addTask=async (req, resp) => {
    console.log(req.body);
    const data=task(req.body)
    console.log(data);
    data.save();
    resp.send(req.body)
    }

    const taskFindById=async (req, res) => {
        const { id } = req.params;
        const taskEntity = await task.findById(id);
      
        res.status(200).send(taskEntity);
      }

      const taskDeleteById=async (req, res) => {
        try {

          const { id } = req.params;
        const taskEntity = await task.findByIdAndDelete(id);
      
        res.status(200).send(taskEntity);
          
        } catch (error) {
          
        }
      }

      const taskUpdate=async (req, res) => {
        // const id=req.params;
        const { body } = req;
        console.log(body._id)
        const updateUser = await task.findByIdAndUpdate(body._id, body);
        
        res.send({ message: "Tutorial was updated successfully" });
      }


  module.exports={getAllTask,addTask,taskFindById,taskDeleteById,taskUpdate}