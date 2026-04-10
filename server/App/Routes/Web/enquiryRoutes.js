let express = require("express");
const { enquiryInsert, enquiryList } = require("../../Controllers/web/enquiryController");

let enquiryRoter = express.Router();

enquiryRoter.post("/insert",enquiryInsert)
enquiryRoter.get("/list",enquiryList)

module.exports = enquiryRoter