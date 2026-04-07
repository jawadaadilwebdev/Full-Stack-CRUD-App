import { Button, Label, TextInput } from "flowbite-react";
import Message from "./Message";

const Form = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 w-full py-10">
        <h1 className="mb-10 font-bold text-white text-xl">Enquiry Form</h1>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput id="name" type="text" placeholder="John Doe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your email</Label>
        </div>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone">Your phone</Label>
        </div>
        <TextInput id="phone" type="text" required />
      </div>
      <Message/>
      <Button type="submit">Save</Button>
    </form>
  )
}

export default Form