// express application connect database using  mongose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/connectDB").then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("no connection")
})

 