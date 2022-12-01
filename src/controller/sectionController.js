const category = require("../models/sectoion");

const getAllCategory = async (req, res) => {
  const list = await category.find();
  res.status(200).send(list);
};
const addsubCategory = async (req, res) => {
  try {
    const data = category(req.body);

    data.save();
    res.send(req.body);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const taskDelete = async (req, res) => {
  try {
    const id = req.params.id;

    const categoryEntity = await category.findByIdAndDelete(id);
    res.status(200).send(categoryEntity);
  } catch (e) {
    res.status(400).send(e);
  }
};

const categoryUpdate = async (req, res) => {
  try {
    const { body } = req;

    const result = await category.findByIdAndUpdate(body._id, body, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCategory, addsubCategory, taskDelete, categoryUpdate };
