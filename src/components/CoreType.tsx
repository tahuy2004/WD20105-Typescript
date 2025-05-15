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
  // Viết 1 danh sách các món ăn yêu thích bằng typescript
  // Hiển thị danh sách món ăn yêu thích ra ngoài màn hình ( sử dụng map )
  return (
    <>
      <div>
        {name} {price} {isVisible}
      </div>
    </>
  );
};

export default CoreType;
