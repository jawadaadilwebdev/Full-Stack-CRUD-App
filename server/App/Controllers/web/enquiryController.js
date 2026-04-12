const enquiryModel = require("../../Models/enquiry.model");

let enquiryInsert = async (req, res) => {
  try {
    let { fullname, email, phone, message } = req.body;
    let user = await new enquiryModel({
      fullname,
      email,
      phone,
      message,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

let enquiryList = async (req, res) => {
  try {
    let users = await enquiryModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

let enquiryDelete = async (req, res) => {
  let enqId = req.params.id;
  try {
    let deleteEnquiry = await enquiryModel.findByIdAndDelete(enqId);
      console.log("Delete API hit", req.params.id);
    res.status(200).json(deleteEnquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}
    

module.exports = { enquiryInsert, enquiryList , enquiryDelete};
