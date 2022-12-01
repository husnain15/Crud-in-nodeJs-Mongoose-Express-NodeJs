const MensRanking =require( "../models/mens");

const createTask=async (req, res) => {
    try {
      const { body } = req;
      const addingMensRecord = new MensRanking(body);
      console.log(req.body);
      await addingMensRecord.save();
      res.status(200).send({ status: true, message: "Data Added Successfully" });
    } catch (e) {
      res.status(400).send(e);
    }
  }
  const deleteById =async (req, res) => {
    try {
      const { rankId } = req.params;
      const userEntityDelete = await MensRanking.findByIdAndDelete(rankId);
  
      res.status(200).send(userEntityDelete);
    } catch (e) {
      res.status(400).send(e);
    }
  }
  const findById=async (req, res) => {
    const { rankId } = req.params;
    const userEntity = await MensRanking.findById(rankId);
  
    res.status(200).send(userEntity);
  }
  const addTask=async (req, resp) => {
    console.log(req.body);
    const data=MensRanking(req.body)
    data.save();
    resp.send(req.body)
    }

    const getAllTask=async (req, res) => {
        const list = await MensRanking.find();
      
        res.status(200).send(list);
      }

  

  module.exports = {createTask,deleteById,findById,getAllTask,addTask};