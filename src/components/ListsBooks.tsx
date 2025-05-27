import { useEffect, useState } from "react";
import type { IBooks } from "../interface";
import { BooksServices } from "../services/Books";
import axios from "axios";
import { useNavigate } from "react-router";

const ListsBooks = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<IBooks[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await BooksServices.fetchAllBooks();
      setBooks(response);
    } catch (error) {
      console.error("lỗi", error);
    }
  };
  const handleBookDelete = async (id: number) => {
    const comfirm = window.confirm("xoa?");
    if (comfirm) {
      await axios.delete(`http://localhost:3000/books/${id}`);
      fetchBooks();
      alert("Xoa thanh cong!");
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr
                key={book.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.id}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.name}
                </th>
                <td className="px-6 py-4">{book.description}</td>
                <td className="px-6 py-4">
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="px-6 py-4">${book.price}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigate(`/books/update/${book.id}`)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      update
                    </button>
                    <button
                      onClick={() => handleBookDelete(book.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListsBooks;
