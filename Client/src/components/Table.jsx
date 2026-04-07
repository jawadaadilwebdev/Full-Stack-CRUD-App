import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


const enquiryTable = () => {
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
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </TableCell>
            <TableCell>Jawad Aadil</TableCell>
            <TableCell>jawad@example.com</TableCell>
            <TableCell>03140050239</TableCell>
            <TableCell>This is my message.</TableCell>

            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default enquiryTable