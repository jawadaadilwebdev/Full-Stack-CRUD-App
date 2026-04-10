import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


const EnquiryTable = ({enquiries}) => {

  // const [enquiries, setEnquiries] = useState([]);




  // useEffect(() => {
  //   axios("http://localhost:5000/api/enquiry/list")
  //     .then((res) => {
  //       setEnquiries(res.data);
        
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

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
            <TableHeadCell>Edit</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {enquiries.map((enquiry, index) => (
            <TableRow key={enquiry._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </TableCell>
              <TableCell>{enquiry.fullname}</TableCell>
              <TableCell>{enquiry.email}</TableCell>
              <TableCell>{enquiry.phone}</TableCell>
              <TableCell>{enquiry.message}</TableCell>
              <TableCell>
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EnquiryTable