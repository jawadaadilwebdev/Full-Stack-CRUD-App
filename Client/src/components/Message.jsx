import React from 'react'
import { Label, Textarea } from "flowbite-react";
const Message = () => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment">Your message</Label>
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
  )
}

export default Message