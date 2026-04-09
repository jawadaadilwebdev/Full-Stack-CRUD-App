import { Button, Label, TextInput,Textarea } from "flowbite-react";
import axios from "axios"

const Form = () => {

  let saveEnquiry = (event) => {
    event.preventDefault();
    let formData = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    }
  axios.post("http://localhost:5000/api/enquiry/insert",formData)
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    console.error(err);
  })};

//   let saveEnquiry = (event) => {
//   event.preventDefault(); // FIXED

//   let form = event.target;

//   let formData = {
//     fullname: form.fullname.value,
//     email: form.email.value,
//     phone: form.phone.value,
//     message: form.message.value
//   };

//   axios.post("http://localhost:5000/api/enquiry/insert", formData)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };


  return (
    <form onSubmit={saveEnquiry} className="flex max-w-md flex-col gap-4 w-full py-10">
        <h1 className="mb-10 font-bold text-white text-xl">Enquiry Form</h1>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput id="name" name="fullname" type="text" placeholder="John Doe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your email</Label>
        </div>
        <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone">Your phone</Label>
        </div>
        <TextInput id="phone" name="phone" type="text" required />
      </div>
      <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="message">Your message</Label>
            </div>
            <Textarea id="message" name='message' placeholder="Leave a comment..." required rows={4} />
          </div>
      <Button type="submit">Save</Button>
    </form>
  )
}

export default Form