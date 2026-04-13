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
    res.status(200).json(deleteEnquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}

let enquirySingleRow = async (req, res) => {
  let enqId = req.params.id;
  try {
    let singleEnquiry = await enquiryModel.findOne({ _id: enqId });
    res.status(200).json(singleEnquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}

let enquiryUpdate = async(req,res)=>{
    try {
    const { id } = req.params;

    const updatedUser = await enquiryModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,        // return updated document
        runValidators: true
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

    

module.exports = { enquiryInsert, enquiryList , enquiryDelete,enquirySingleRow,enquiryUpdate};
