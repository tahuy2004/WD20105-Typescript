import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import type { IUser } from "../interface";
import { RegisterSchema } from "../Schemas/users";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit = async (data: IUser) => {
    try {
      await axios.post("http://localhost:3000/register", data);

      window.alert("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      console.log("Lỗi đăng ký:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Đăng ký</h2>

        {/* Tên đăng nhập */}
        <div className="mb-4">
          <label className="block mb-1">Tên đăng ky</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Mật khẩu */}
        <div className="mb-4">
          <label className="block mb-1">Mật khẩu</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Nút đăng ký */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
};

export default Register;
