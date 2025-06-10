import axios from "axios";
import type { IUser } from "../interface";

const fetchAllUsers = async () => {
  try {
    const respones = await axios.get<IUser[]>("http://localhost:3000/users");
    if (!Array.isArray(respones.data)) {
      throw new Error("API không trả về mảng");
    }
    return respones.data;
  } catch (error) {
    console.log("lỗi", error);
  }
};
export const UsersServices = { fetchAllUsers };
