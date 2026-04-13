import { useEffect, useState } from "react";
import Form from "./components/Form";
import EnquiryTable from "./components/Table";
import axios from "axios";

const App = () => {

  const[formData,setFormData] = useState({
    fullname: "",
      email: "",
      phone: "",
      message: ""
  })

const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = () => {
    axios.get("http://localhost:5000/api/enquiry/list")
      .then((res) => setEnquiries(res.data));
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold text-center text-2xl">User Enquiry</h1>
      <div className="w-[90%] h-[80vh]  my-6 mx-auto flex justify-around bg-gray-900 rounded-lg">
        <Form refresh={fetchEnquiries} className="w-[40%]" formData={formData} setformData={setFormData}/>
        <EnquiryTable enquiries={enquiries} refresh={fetchEnquiries} setEnquiries={setEnquiries} setformData={setFormData} className="w-[50%]"/>
      </div>
    </div>
  );
};

export default App;
