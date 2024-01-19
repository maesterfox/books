import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="bg-primary text-white">
          <th className="border border-slate-600 rounded-md py-2 shadow-sm shadow-stone-800">
            No
          </th>
          <th className="border border-slate-600 rounded-md py-2 shadow-sm shadow-stone-800">
            Title
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden py- shadow-sm shadow-stone-800">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden py-2 shadow-sm shadow-stone-800">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md py-2 shadow-sm shadow-stone-800">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-10 hover:bg-gray-100">
            <td className="border border-slate-700 rounded-md text-center shadow-sm shadow-stone-800">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text- shadow-sm shadow-stone-800">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden shadow-sm shadow-stone-800">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden shadow-sm shadow-stone-800">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center shadow-sm shadow-stone-800">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600 transition duration-300" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 transition duration-300" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 transition duration-300" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
