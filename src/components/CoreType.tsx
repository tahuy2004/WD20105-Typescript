/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const CoreType = () => {
  // Khai báo 3 biến bằng typescript với 3 kiểu dữ liệu ( string, number, boolean)
  const name: string = "Nguyễn Văn A";
  const price: number = 1000;
  const isVisible: boolean = true;
  // Typle
  const variableTuples: [string, number, boolean] = ["NVA", 21, true];
  // Array
  const arr: number[] = [1, 2, 3, 4, 5];
  const favoriteFood: string[] = ["Pizza", "Noodle", "Hamburger", "Sushi"];

  // enum
  enum Color {
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
  }
  let color: Color = Color.RED;

  // literal type
  // Giới hạn giá trị của biến
  const literalType: "Hello" | "world" = "Hello";
  // Union Type
  // Giới hạn kiểu dữ liệu của biến
  const variableUnion: string | number = 123;

  // Any
  let anyVariable: any = "Hello world";
  // Không cần kiểm tra kiểu dữ liệu trước khi sử dụng
  anyVariable = 123;

  // Unknown type
  // An toàn hơn any
  // Phải kiểm tra kiểu dữ liệu trước khi sử dụng
  const print = (value: unknown) => {
    if (typeof value === "string") {
      console.log(value.toLowerCase());
    }
  };
  print("HHHHH");
  // Object
  // 2 kiểu khai báo typescript object : interface và type
  interface ILaptop {
    name: string;
    price: number;
    getInfo: () => void;
  }

  type LaptopType = {
    name: string;
    price: number;
    getInfo: () => void;
  };

  const variableLaptop: ILaptop = {
    name: "Macbook Pro",
    price: 1000,
    getInfo: () => {
      console.log(
        `Name: ${variableLaptop.name}, Price: ${variableLaptop.price}`
      );
    },
    description: "Macbook Pro 2023",
  };

  return (
    <>
      <div>
        {name} {price} {isVisible} {anyVariable} {color} {literalType}
      </div>
      <ul>
        {favoriteFood.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </>
  );
};

export default CoreType;
