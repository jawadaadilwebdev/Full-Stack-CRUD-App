let express = require('express');
let mongoose = require('mongoose');
const enquiryRoter = require('./App/Routes/Web/enquiryRoutes');
require('dotenv').config()
let app = express()
app.use(express.json())


// Routes
app.use("/api/enquiry",enquiryRoter)

app.get("/",(req,res)=>{
    res.send("Hello World")
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connected Succesfully")
})
.catch((err)=>{
    console.log("Error in Connecting To MongoDB",err);
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
