let mongoose = require('mongoose')

let enquirySchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    phone:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

let enquiryModel = mongoose.model("Enquiry",enquirySchema)
module.exports = enquiryModel