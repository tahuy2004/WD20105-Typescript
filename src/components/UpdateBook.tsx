import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const BookSchema = z.object({
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  description: z.string().optional(),
  image: z.string().url("Phải là URL hợp lệ của hình ảnh"),
  price: z.number().min(0, "Giá không được nhỏ hơn 0"),
});
type BookSchemaType = z.infer<typeof BookSchema>;

const UpdateBooks = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Lấy id từ url params

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookSchemaType>({
    resolver: zodResolver(BookSchema),
  });

  useEffect(() => {
    // Load data sách theo id
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        reset(response.data); // reset form với data đã lấy về
      } catch (error) {
        console.log("Lỗi khi lấy sách:", error);
      }
    };
    if (id) fetchBook();
  }, [id, reset]);

  // Xử lý submit update
  const onSubmit = async (data: BookSchemaType) => {
    try {
      await axios.put(`http://localhost:3000/books/${id}`, data);
      alert("Cập nhật sản phẩm thành công");
      navigate("/books");
    } catch (error) {
      console.log("Lỗi cập nhật:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Cập nhật sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tên sản phẩm */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Tên sản phẩm</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Mô tả */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Mô tả</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            {...register("description")}
          />
        </div>

        {/* Hình ảnh (URL) */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Hình ảnh (URL)</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("image")}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Giá */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Giá</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            min="0"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Nút Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg--700 text-white px-4 py-2 rounded"
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};

export default UpdateBooks;
