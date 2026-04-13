import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";

const EnquiryTable = ({ enquiries, refresh, setformData }) => {
  let deleteRow = async (id) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:5000/api/enquiry/delete/${id}`);
          await Swal.fire("Deleted!", "Your file has been deleted.", "success");
          refresh();
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  let editRow = async(id)=>{
    axios.get(`http://localhost:5000/api/enquiry/single/${id}`)
    .then((res)=>{
      setformData(res.data) 
    }).catch((err)=>{
      console.error(err);
    }
    )
  }

  return (
    <div className="overflow-x-auto py-10">
      <h1 className="mb-10 font-bold text-white text-xl">Enquiry Table</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
          </TableRow>
        </TableHead>
        {enquiries.length > 0 ? (
          <TableBody className="divide-y">
            {enquiries.map((enquiry, index) => (
              <TableRow
                key={enquiry._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </TableCell>
                <TableCell>{enquiry.fullname}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.message}</TableCell>
                <TableCell>
                  <button
                    onClick={() => deleteRow(enquiry._id)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Delete
                  </button>
                </TableCell>
                <TableCell>
                  <a
                    href="#"
                    onClick={() => editRow(enquiry._id)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <h2 className="mt-3">No Data Found</h2>
        )}
      </Table>
    </div>
  );
};

export default EnquiryTable;
