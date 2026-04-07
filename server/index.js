let express = require('express');
let mongoose = require('mongoose')
require('dotenv').config()
let app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connected Succesfully")
})
.catch(()=>{
    console.log("Error in Connecting To MongoDB");
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
