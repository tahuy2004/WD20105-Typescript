import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const BookSchema = z.object({
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  description: z.string().optional(),
  image: z.string().url("Hinh anh k dung "),
  price: z.number().min(0, "Giá không được nhỏ hơn 0"),
});
type BookSchemaType = z.infer<typeof BookSchema>;

const AddBooks = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSchemaType>({ resolver: zodResolver(BookSchema) });

  const createBook = async (book: BookSchemaType) => {
    try {
      const response = await axios.post(`http://localhost:3000/books`, book);
      if (response.status === 201) {
        alert("Thêm sản phẩm thành công");
        navigate("/books");
      }
    } catch (error) {
      console.error("Lỗi", error);
    }
  };

  const onSubmit = (value: BookSchemaType) => {
    createBook(value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Thêm sản phẩm mới</h2>
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
          ></textarea>
        </div>

        {/* Hình ảnh */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Hình ảnh (URL)</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("image")}
          />
          {errors.image && <p className="text-red-500 text-sm"></p>}
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
