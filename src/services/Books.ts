import axios from "axios";
import type { IBooks } from "../interface";

const fetchAllBooks = async () => {
  try {
    const response = await axios.get<IBooks[]>("http://localhost:3000/books");
    if (!Array.isArray(response.data)) {
      throw new Error("API không trả về mảng");
    }
    return response.data;
  } catch (error) {
    console.log("lỗi", error);
    return [];
  }
};
export const BooksServices = { fetchAllBooks };
