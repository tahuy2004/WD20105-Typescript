import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { useState } from "react";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type LoginType = z.infer<typeof LoginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginType) => {
    try {
      const response = await axios.post("http://localhost:3000/login", data);
      // console.log(response);

      if (response.data.user) {
        localStorage.setItem("token", response.data.token);
        window.alert("Đăng nhập thành công");
        navigate("/books");
      } else {
        window.alert(
          "Đăng nhập thất bại:  " +
            (response.data.message || "Thông tin đăng nhập không chính xác")
        );
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      window.alert("Đăng nhập thất bại. Vui lòng thử lại sau.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>

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

        {/* Nút đăng nhập */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Dang nhap
        </button>
      </div>
    </form>
  );
};

export default Login;
