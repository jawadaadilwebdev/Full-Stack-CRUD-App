import { Button } from "flowbite-react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-center text-2xl">User Enquiry</h1>
      <div className="w-[90%] h-[80vh]  my-6 mx-auto flex justify-around bg-gray-900 rounded-lg">
        <Form className="w-[40%]"/>
        <Table className="w-[50%]"/>
      </div>
    </div>
  );
};

export default App;
