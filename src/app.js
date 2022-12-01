//add express
const express = require("express");

const MensRanking = require("../src/models/mens");
const userRouter = require("./routers/men");
const taskRouter = require("./routers/taskRouter")
const sectionRouter=require("./routers/sectionRouter")
const chatRoom=require("./routers/chatRouter")

//import connection file

require("../src/db/conn.js");

//create the path that project run port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(sectionRouter);
app.use(chatRoom);


//defined the root

// listen the application

app.listen(port, () => {
  console.log(`you run the port no ${port}`);
});
