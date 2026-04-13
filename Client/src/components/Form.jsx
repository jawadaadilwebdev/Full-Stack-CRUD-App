import { Button, Label, TextInput,Textarea } from "flowbite-react";
import axios from "axios"
import Swal from "sweetalert2";

const Form = ({ refresh ,formData ,setformData}) => {

  let saveEnquiry = async (event) => {
    event.preventDefault();
    let recData = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }
  axios.post("http://localhost:5000/api/enquiry/insert",recData)
  .then( async (res)=>{
    console.log(res.data);
    setformData({
          fullname: "",
          email: "",
          phone: "",
          message: ""
        });
    await Swal.fire("Success!", "Your action was successful.", "success");
    refresh();
  })
  .catch((err)=>{
    console.error(err);
  })};

const updateUser = async (event) => {
  event.preventDefault();
  const userId = formData._id; // replace with real ID

 let updatedData = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }

  try {
    const response = await axios.put(
      `http://localhost:5000/api/enquiry/update/${userId}`,
      updatedData
    );
        await Swal.fire("Success!", "Your Updation was successful.", "success");
    refresh();
        setformData({
          fullname: "",
          email: "",
          phone: "",
          message: ""
        });


    console.log("Updated user:", response.data);

  } catch (error) {
    console.error("Error updating user:", error.response?.data || error.message);
  }
};


  return (
    <form onSubmit={formData._id ? (e) => updateUser(e) : (e) => saveEnquiry(e)} className="flex max-w-md flex-col gap-4 w-full py-10">
        <h1 className="mb-10 font-bold text-white text-xl">Enquiry Form</h1>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your Name</Label>
        </div>
        <TextInput id="name" value={formData.fullname} onChange={(e) => setformData({...formData, fullname: e.target.value})} name="fullname" type="text" placeholder="John Doe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your Email</Label>
        </div>
        <TextInput id="email" value={formData.email} onChange={(e) => setformData({...formData, email: e.target.value})} name="email" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone">Phone Number</Label>
        </div>
        <TextInput id="phone" value={formData.phone} onChange={(e) => setformData({...formData, phone: e.target.value})} name="phone" type="text" required />
      </div>
      <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="message">Message</Label>
            </div>
            <Textarea id="message" value={formData.message} onChange={(e) => setformData({...formData, message: e.target.value})} name='message' placeholder="Leave a comment..." required rows={4} />
          </div>
      <Button type="submit">{formData._id?"Update":"Save"}</Button>
    </form>
  )
}

export default Form