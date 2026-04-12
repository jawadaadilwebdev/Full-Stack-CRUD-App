let express = require("express");
const { enquiryInsert, enquiryList, enquiryDelete } = require("../../Controllers/web/enquiryController");

let enquiryRoter = express.Router();

enquiryRoter.post("/insert",enquiryInsert)

enquiryRoter.get("/list",enquiryList)

enquiryRoter.delete("/delete/:id",enquiryDelete)


module.exports = enquiryRoter