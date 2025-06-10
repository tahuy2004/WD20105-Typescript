import { z } from "zod";

export const BookSchema = z.object({
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  description: z.string().optional(),
  image: z.string().url("Phải là URL hợp lệ của hình ảnh"),
  price: z.number().min(0, "Giá không được nhỏ hơn 0"),
});
export type BookSchemaType = z.infer<typeof BookSchema>;
