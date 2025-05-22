import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

// rule validate
const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  price: z.number().min(0),
  description: z.string(),
  category: z.string().min(3, { message: "Category is required" }),
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

const FormCreateProduct = () => {
  // Thêm sản phẩm
  // 1. Tạo form nhập thông tin sản phẩm => done
  // 2. Láy dữ liệu từ form và validate dữ liệu => done
  // 3. Gửi dữ liệu lên server
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({ resolver: zodResolver(ProductSchema) });
  const navigate = useNavigate();

  const createProduct = async (product: ProductSchemaType) => {
    try {
      const createProductResponse = await axios.post(
        "http://localhost:3000/products",
        product
      );
      if (createProductResponse.status === 201) {
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error creating product");
    }
  };
  const onSubmit = (value: ProductSchemaType) => {
    createProduct(value);
  };

  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold">Create Product</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="name">
            Product Name
          </label>
          <input
            {...register("name")}
            className={`border w-full ${
              errors.name
                ? "border-red-500 outline-red-500"
                : "border-gray-300"
            }  rounded-lg p-2`}
            type="text"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="price">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            className="border w-full border-gray-300 rounded-lg p-2"
            type="number"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="description">
            Description
          </label>
          <textarea
            {...register("description")}
            className="border w-full border-gray-300 rounded-lg p-2"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="border w-full border-gray-300 rounded-lg p-2"
          >
            <option value=""> Select category</option>
            <option value="Laptop">Laptop</option>
            <option value="SmartPhone">SmartPhone</option>
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 text-white rounded-lg mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCreateProduct;
