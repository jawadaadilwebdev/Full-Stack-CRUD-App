let express = require("express");
const { enquiryInsert } = require("../../Controllers/web/enquiryController");

let enquiryRoter = express.Router();

enquiryRoter.post("/insert",enquiryInsert)

module.exports = enquiryRoter