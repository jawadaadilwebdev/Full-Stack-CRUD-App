let express = require("express");
const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdate } = require("../../Controllers/web/enquiryController");

let enquiryRoter = express.Router();

enquiryRoter.post("/insert",enquiryInsert)

enquiryRoter.get("/list",enquiryList)

enquiryRoter.delete("/delete/:id",enquiryDelete)

enquiryRoter.get("/single/:id",enquirySingleRow)

enquiryRoter.put("/update/:id",enquiryUpdate)


module.exports = enquiryRoter