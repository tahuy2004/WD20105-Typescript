import React from "react";

const FormCreateProduct = () => {
  // Thêm sản phẩm
  // 1. Tạo form nhập thông tin sản phẩm
  // 2. Láy dữ liệu từ form và validate dữ liệu
  // 3. Gửi dữ liệu lên server
  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold">Create Product</h1>
      <form action="" onSubmit={}>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="productName">
            Product Name
          </label>
          <input
            className="border w-full border-gray-300 rounded-lg p-2"
            type="text"
          />
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="price">
            Price
          </label>
          <input
            className="border w-full border-gray-300 rounded-lg p-2"
            type="text"
          />
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="description">
            Description
          </label>
          <textarea className="border w-full border-gray-300 rounded-lg p-2" />
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="category">
            Category
          </label>
          <select
            className="border w-full border-gray-300 rounded-lg p-2"
          >
            <option> Select category</option>
            <option value="Laptop">Laptop</option>
            <option value="SmartPhone">SmartPhone</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-lg mt-3">Submit</button>
      </form>
    </div>
  );
};

export default FormCreateProduct;
